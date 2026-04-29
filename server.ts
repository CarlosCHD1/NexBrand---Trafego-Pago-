import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON parsing for body requests
  app.use(express.json());
  app.set('trust proxy', true);

  // Endpoint to handle Conversions API tracking
  app.post('/api/track-conversion', async (req, res) => {
    try {
      const { eventName, eventId, eventUrl, fbp, fbc, customData } = req.body;
      const pixelId = process.env.VITE_META_PIXEL_ID;
      const accessToken = process.env.META_ACCESS_TOKEN;

      if (!pixelId || !accessToken) {
        // Return 200 so the client doesn't complain, but effectively ignore
        return res.status(200).json({ status: 'ignored', message: 'Meta credentials not set' });
      }

      // Capture client connection data
      const clientIp = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.ip;
      const userAgent = req.headers['user-agent'];

      const payload = {
        data: [
          {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_id: eventId,
            event_source_url: eventUrl,
            user_data: {
              client_ip_address: clientIp,
              client_user_agent: userAgent,
              ...(fbp && { fbp }),
              ...(fbc && { fbc })
            },
            ...(customData && { custom_data: customData })
          }
        ],
        test_event_code: "TEST60755"
      };

      const response = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      res.json({ success: true, api_response: data });
    } catch (error) {
      console.error('Meta CAPI Error:', error);
      // Fail gracefully
      res.status(500).json({ error: 'Failed to send event to Meta' });
    }
  });

  // Vite integration as middleware (dev vs prod mode)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // SPA fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
