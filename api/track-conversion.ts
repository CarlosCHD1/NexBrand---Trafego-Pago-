import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const PIXEL_ID = process.env.META_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  const { eventName, eventId, eventUrl, fbp, fbc, customData } = req.body || {};

  if (!eventName) return res.status(400).json({ error: 'eventName is required' });

  const rawIp = req.headers['x-forwarded-for'];
  const clientIp = Array.isArray(rawIp)
    ? rawIp[0]
    : rawIp?.split(',')[0]?.trim();

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId || (eventName + '_' + Date.now()),
        event_source_url: eventUrl || 'https://www.nexbrand.com.br',
        action_source: 'website',
        user_data: {
          ...(fbp && { fbp }),
          ...(fbc && { fbc }),
          ...(clientIp && { client_ip_address: clientIp }),
          client_user_agent: req.headers['user-agent'] || '',
        },
        ...(customData && { custom_data: customData }),
      },
    ],
  };

  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const metaRes = await fetch(
      'https://graph.facebook.com/v19.0/' + PIXEL_ID + '/events?access_token=' + ACCESS_TOKEN,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await metaRes.json();

    if (!metaRes.ok) {
      return res.status(502).json({ error: 'Meta API error', details: result });
    }

    return res.status(200).json({
      success: true,
      events_received: result.events_received,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal error' });
  }
      }
