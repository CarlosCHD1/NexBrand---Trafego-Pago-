import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, Radar, Crosshair, ArrowRight, Flame, TrendingDown, 
  PieChart, Search, Target, 
  Zap, BarChart2, Filter, Check, X, ScanFace, Quote, Globe, Lock, 
  Instagram, Facebook, Layers, Sparkles, Star, Heart, Droplet, Activity, Eye, Gem
} from 'lucide-react';
import { motion } from 'motion/react';

// SVG ICON: Nexbrand Circular Gradient Favicon
const FaviconSvg = ({ className = "w-8 h-8" }) => (
  <img src="/logo-icon.png" className={className} alt="Nexbrand" />
);

// LOGO: Nexbrand Full Logo (Navbar)
const LogoTextSvg = ({ className = "h-8" }) => (
  <img src="/logo-light.png" className={className} alt="Nexbrand" />
);

// LOGO: Nexbrand Full Logo (Footer)
const LogoTextDarkSvg = ({ className = "h-8" }) => (
  <img src="/logo-dark.png" className={className} alt="Nexbrand" />
);

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30, skewY: 1 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInLeft: any = {
  hidden: { opacity: 0, x: -40, skewX: 0.5 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight: any = {
  hidden: { opacity: 0, x: 40, skewX: -0.5 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ICONS = [Instagram, Facebook, Sparkles, Star, Heart, Droplet, Activity, Eye, Gem, Target, Zap, Flame];

const SocialRing = ({ size, reverse, duration, itemsCount, dashed }: { size: number, reverse?: boolean, duration: string, itemsCount: number, dashed?: boolean }) => {
    return (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${dashed ? 'border-dashed border-white/5' : 'border-white/5'} ${reverse ? 'animate-spin-slow-reverse-bg' : 'animate-spin-slow-bg'}`}
             style={{ width: size, height: size, animationDuration: duration }}>
            {Array.from({ length: itemsCount }).map((_, i) => {
                const angle = (i / itemsCount) * 360;
                const Icon = ICONS[(i + size) % ICONS.length];
                return (
                    <div key={i} className="absolute" style={{
                        left: '50%', top: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${size / 2}px) rotate(-${angle}deg)`,
                    }}>
                        <div className="bg-[#121212]/60 backdrop-blur-md p-2 md:p-3 rounded-xl border border-white/5 shadow-lg">
                             <Icon className="text-white/30 w-4 h-4 md:w-5 md:h-5" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const SocialSpiralBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden mix-blend-screen"
             style={{
                 opacity: 0.7,
                 zIndex: 11
             }}>
             {/* Center the spiral behind the video on desktop (approx 75% left), and center on mobile */}
             <div className="absolute top-1/2 left-1/2 lg:left-[75%] -translate-x-1/2 -translate-y-1/2 w-[250vw] h-[250vw] min-w-[1500px] min-h-[1500px]"
                  style={{
                      transform: "scale(1)",
                  }}>
                  <SocialRing size={400} duration="40s" itemsCount={3} dashed={false} />
                  <SocialRing size={700} reverse duration="55s" itemsCount={5} dashed={true} />
                  <SocialRing size={1000} duration="75s" itemsCount={8} dashed={false} />
                  <SocialRing size={1300} reverse duration="95s" itemsCount={12} dashed={true} />
                  <SocialRing size={1600} duration="120s" itemsCount={16} dashed={false} />
                  <SocialRing size={1900} reverse duration="150s" itemsCount={20} dashed={true} />
                  <SocialRing size={2200} duration="180s" itemsCount={24} dashed={false} />
             </div>
             
             {/* Radial fade on the left side to keep text clear on desktop, center on mobile */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#121212_0%,transparent_60%)] lg:bg-[radial-gradient(circle_at_30%_50%,#121212_0%,transparent_60%)] pointer-events-none opacity-90"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/10 via-transparent to-[#121212] opacity-100 pointer-events-none"></div>
        </div>
    )
}

const RevealUp = ({ children, className, delay = 0 }: any) => (
  <motion.div 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, margin: "-100px" }} 
    variants={{...fadeInUp, visible: {...fadeInUp.visible, transition: {...fadeInUp.visible.transition, delay}}}} 
    className={className}
  >
    {children}
  </motion.div>
);

const RevealLeft = ({ children, className }: any) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInLeft} className={className}>
    {children}
  </motion.div>
);

const RevealRight = ({ children, className }: any) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInRight} className={className}>
    {children}
  </motion.div>
);

const MarqueeItem = () => (
  <>
    <span>GestÃ£o de TrÃ¡fego</span> <span className="text-light/40">â¢</span>
    <span>OtimizaÃ§Ã£o de ROAS</span> <span className="text-light/40">â¢</span>
    <span>Escala de Vendas</span> <span className="text-light/40">â¢</span>
    <span>Tracking AvanÃ§ado</span> <span className="text-light/40">â¢</span>
    <span>Performance</span> <span className="text-light/40">â¢</span>
  </>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTrackEvent = (eventName: string, sourceName: string) => {
    // Generate a unique event ID for deduplication
    const eventId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();

    // 1. Client-Side Tracking (Meta Pixel)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const standardEvents = ['Contact', 'Lead', 'Schedule', 'SubmitApplication', 'ViewContent'];
      if (standardEvents.includes(eventName)) {
        (window as any).fbq('track', eventName, { content_name: sourceName }, { eventID: eventId });
      } else {
        (window as any).fbq('trackCustom', eventName, { content_name: sourceName }, { eventID: eventId });
      }
    }

    // Capture Pixel Cookies internally
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? match[2] : null;
    };

    // 2. Server-Side Tracking (Conversions API)
    fetch('/api/track-conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        eventUrl: window.location.href,
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc'),
        customData: {
          content_name: sourceName
        }
      })
    }).catch(err => console.error('Failed to notify CAPI', err));
  };

  return (
    <div className="relative">
      <div className="noise-overlay"></div>

      <a href="https://wa.me/5566999825409" target="_blank" rel="noreferrer" onClick={() => handleTrackEvent('Contact', 'WhatsApp_Flutuante')} className="whatsapp-float group" aria-label="Falar no WhatsApp">
        <svg className="whatsapp-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      <a href="https://wa.me/5566999825409" target="_blank" rel="noreferrer" onClick={() => handleTrackEvent('Contact', 'Selo_Flutuante_Centro')} className="global-floating-badge group" aria-label="Agendar DiagnÃ³stico">
        <svg className="global-badge-svg text-white/60 group-hover:text-primary transition-colors duration-300" viewBox="0 0 100 100">
            <path id="globalBadgePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
            <text className="font-black uppercase text-[10.5px] fill-current" style={{letterSpacing: '0.08em'}}>
                <textPath href="#globalBadgePath" textLength="213">NEXBRAND â¢ PERFORMANCE â¢ </textPath>
            </text>
        </svg>
        <div className="global-badge-core text-white flex items-center justify-center">
          <FaviconSvg className="w-[46px] h-[46px]" />
        </div>
      </a>

      <nav id="navbar" className={`fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center transition-all duration-300 text-white ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="flex items-center">
            <LogoTextSvg className="h-8 md:h-10 w-auto" />
        </div>
        <div>
            <a href="https://wa.me/5566999825409" target="_blank" rel="noreferrer" onClick={() => handleTrackEvent('Contact', 'Navbar_Consultoria')} className="text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 border-2 border-white px-5 py-2.5 rounded-none hover:bg-white hover:text-dark uppercase tracking-widest">
                Consultoria <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-between relative overflow-hidden pt-32 bg-dark">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark z-10"></div> 
            <SocialSpiralBackground />
            <div className="absolute inset-0 dot-pattern z-[12] opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/50 z-20 pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 z-30 relative flex-grow flex flex-col justify-center w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                    <RevealUp delay={0.1}>
                        <div className="inline-flex items-center gap-2 bg-white text-dark px-3 py-1.5 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-8 border-2 border-dark shadow-[2px_2px_0px_#FF3C00] transform -rotate-1">
                            <Radar className="w-3.5 h-3.5 text-primary animate-pulse" />
                            CaptaÃ§Ã£o de Pacientes
                        </div>
                    </RevealUp>

                    <RevealUp delay={0.2}>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-normal mb-8 uppercase">
                            Quem nÃ£o aparece,<br/>
                            <span className="highlight-pill mt-3 text-white">nÃ£o vende.</span>
                        </h1>
                    </RevealUp>

                    <RevealUp delay={0.3}>
                        <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 font-medium leading-relaxed flex items-start gap-3">
                            <Crosshair className="w-6 h-6 text-primary flex-shrink-0 mt-1 opacity-80" />
                            <span>GestÃ£o de trÃ¡fego e posicionamento para clÃ­nicas de estÃ©tica e profissionais que desejam escalar o faturamento e lotar a agenda.</span>
                        </p>
                    </RevealUp>

                    <RevealUp delay={0.4} className="flex flex-col sm:flex-row items-start gap-6">
                        <a href="https://wa.me/5566999825409" target="_blank" rel="noreferrer" onClick={() => handleTrackEvent('Schedule', 'Hero_Agendar_Sessao')} className="bg-primary text-white px-8 py-4 font-bold text-sm md:text-base tracking-widest uppercase btn-solid inline-flex items-center gap-3">
                            Agendar SessÃ£o 
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </RevealUp>
                </div>
                
                <div className="lg:col-span-5 mt-12 lg:mt-0 flex justify-center w-full">
                    <RevealUp delay={0.5} className="w-full">
                        <div className="relative w-full max-w-[560px] mx-auto bg-dark border-2 border-white/20 shadow-[8px_8px_0px_#FF3C00] transform md:rotate-2 hover:rotate-0 transition-transform duration-500 flex flex-col group overflow-hidden">
                            <div className="border-b-2 border-white/20 p-3 flex justify-between items-center bg-dark z-10 relative">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full border border-white/50 bg-dark"></div>
                                    <div className="w-3 h-3 rounded-full border border-white/50 bg-dark"></div>
                                    <div className="w-3 h-3 rounded-full border border-primary bg-primary"></div>
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 flex items-center gap-2">
                                    <Globe className="w-3 h-3" />
                                    Nexbrand.mp4
                                </span>
                            </div>
                            <div className="relative w-full aspect-video bg-dark">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/VRjIVQsGcb8?rel=0&modestbranding=1"
                                    title="ApresentaÃ§Ã£o Nexbrand"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ border: 'none' }}
                                ></iframe>
                            </div>
                        </div>
                    </RevealUp>
                </div>
            </div>
        </div>

        <RevealUp delay={0.6}>
            <div className="marquee-container z-30 relative mt-20">
                <div className="marquee-content font-outfit font-black text-xl md:text-2xl uppercase tracking-widest flex gap-8 items-center">
                    <MarqueeItem />
                    <MarqueeItem />
                    <MarqueeItem />
                </div>
            </div>
        </RevealUp>
      </section>

      <section className="py-24 md:py-32 px-6 bg-light text-dark relative z-10 overflow-hidden">
        <div className="absolute inset-0 dot-pattern-dark z-0 opacity-30"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <RevealUp className="lg:col-span-6 space-y-8">
                <h2 className="text-4xl md:text-6xl font-black font-outfit leading-[1] tracking-normal uppercase flex flex-col items-start gap-2">
                    Pare de atrair<br/>
                    <span className="text-primary flex items-center gap-4">
                        apenas curiosos.
                        <Eye className="w-10 h-10 text-primary hidden md:block" />
                    </span>
                </h2>
                <div className="border-l-4 border-dark pl-5 space-y-4 py-1">
                    <p className="text-dark/90 text-lg md:text-xl font-bold leading-relaxed">
                        O problema nÃ£o Ã© o seu procedimento, nem o seu espaÃ§o. A sua campanha estÃ¡ atraindo curiosos. Ã preciso um diagnÃ³stico cirÃºrgico.
                    </p>
                    <p className="text-dark/70 text-base font-medium leading-relaxed">
                        Acabe com as promoÃ§Ãµes que desvalorizam o serviÃ§o e contatos desqualificados. Ã hora de atrair quem busca e pode pagar pelo seu valor.
                    </p>
                </div>
                <div className="bg-primary text-white border-2 border-dark p-5 shadow-[4px_4px_0px_#121212] max-w-md transform -rotate-1 hover:rotate-0 transition-transform relative">
                    <TrendingDown className="w-6 h-6 mb-3 opacity-90" />
                    <p className="font-bold text-lg md:text-xl tracking-normal">
                        E no final do mÃªs, o WhatsApp estÃ¡ cheio de "qual o valor?". A agenda, com buracos.
                    </p>
                </div>
            </RevealUp>
            
            <RevealUp className="lg:col-span-6 relative h-[400px] md:h-[450px]">
                <div className="absolute top-0 right-0 w-full h-full border-2 border-dark bg-white z-0 transform translate-x-3 translate-y-3"></div>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="AnÃ¡lise de Dados" className="absolute inset-0 w-full h-full object-cover border-2 border-dark grayscale contrast-125 z-10" />
                <div className="absolute bottom-4 left-4 z-20 bg-white border-2 border-dark px-3 py-1.5 font-bold uppercase tracking-widest text-[10px] shadow-[2px_2px_0px_#FF3C00] flex items-center gap-2">
                    <PieChart className="w-3 h-3 text-primary" />
                    Data Analysis // 2026
                </div>
            </RevealUp>
        </div>
      </section>

      <div className="thick-divider"></div>

      <section className="py-24 md:py-32 px-6 bg-light relative z-10">
        <div className="absolute inset-0 dot-pattern-dark z-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <RevealUp className="max-w-3xl mb-16 text-dark">
                <span className="bg-primary text-dark font-bold px-3 py-1.5 uppercase tracking-widest text-[10px] border-2 border-dark inline-flex items-center gap-2 mb-6 shadow-[2px_2px_0px_#121212]">
                    <Layers className="w-3.5 h-3.5" /> O MÃ©todo
                </span>
                <h2 className="text-4xl md:text-6xl font-black font-outfit leading-[1] tracking-normal uppercase mb-6">
                    O anÃºncio Ã© o<br/>Ãºltimo passo.<br/>
                    <span className="text-primary">A estratÃ©gia vende antes.</span>
                </h2>
                <p className="text-dark/80 text-lg font-medium border-l-4 border-primary pl-4">
                    Antes de apertar qualquer botÃ£o, construÃ­mos um posicionamento magnÃ©tico. Focamos no paciente ideal que busca os seus serviÃ§os high-ticket e blindamos a sua clÃ­nica contra quem sÃ³ procura preÃ§o.
                </p>
            </RevealUp>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <RevealUp className="brutalist-card p-8 md:p-10 flex flex-col justify-between min-h-[280px] group">
                    <div className="card-number-bg">01</div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white group-hover:bg-primary transition-colors duration-300 border-2 border-dark shadow-[2px_2px_0px_#121212] flex items-center justify-center flex-shrink-0">
                            <Search className="w-6 h-6 text-primary group-hover:text-dark transition-colors duration-300" />
                        </div>
                        <h3 className="font-black text-2xl md:text-3xl font-outfit tracking-normal uppercase">DiagnÃ³stico ClÃ­nico & Posicionamento</h3>
                    </div>
                    <ul className="space-y-3 mt-auto">
                        <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary border border-dark mt-1.5 flex-shrink-0"></div>
                            <p className="text-dark/90 font-medium text-base">Entendimento do seu procedimento mais rentÃ¡vel.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary border border-dark mt-1.5 flex-shrink-0"></div>
                            <p className="text-dark/90 font-medium text-base">Mapeamento do seu paciente ideal e com alto poder de compra.</p>
                        </li>
                    </ul>
                </RevealUp>
                
                <RevealUp className="brutalist-card p-8 md:p-10 flex flex-col justify-between min-h-[280px] group" delay={0.1}>
                    <div className="card-number-bg">02</div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white group-hover:bg-primary transition-colors duration-300 border-2 border-dark shadow-[2px_2px_0px_#121212] flex items-center justify-center flex-shrink-0">
                            <Target className="w-6 h-6 text-primary group-hover:text-dark transition-colors duration-300" />
                        </div>
                        <h3 className="font-black text-2xl md:text-3xl font-outfit tracking-normal uppercase">CaptaÃ§Ã£o CirÃºrgica</h3>
                    </div>
                    <ul className="space-y-3 mt-auto">
                        <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary border border-dark mt-1.5 flex-shrink-0"></div>
                            <p className="text-dark/90 font-medium text-base">Campanhas segmentadas para o pÃºblico A/B da sua regiÃ£o.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary border border-dark mt-1.5 flex-shrink-0"></div>
                            <p className="text-dark/90 font-medium text-base">Leads que buscam transformaÃ§Ã£o real, nÃ£o apenas preÃ§o.</p>
                        </li>
                    </ul>
                </RevealUp>
                
                <RevealUp className="brutalist-card p-8 md:p-10 flex flex-col justify-between min-h-[280px] group" delay={0.2}>
                    <div className="card-number-bg">03</div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white group-hover:bg-primary transition-colors duration-300 border-2 border-dark shadow-[2px_2px_0px_#121212] flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-primary group-hover:text-dark transition-colors duration-300" />
                        </div>
                        <h3 className="font-black text-2xl md:text-3xl font-outfit tracking-normal uppercase">AnÃºncios que Geram Desejo</h3>
                    </div>
                    <ul className="space-y-3 mt-auto">
                        <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary border border-dark mt-1.5 flex-shrink-0"></div>
                            <p className="text-dark/90 font-medium text-base">Criativos que valorizam a beleza e autoridade do seu espaÃ§o.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary border border-dark mt-1.5 flex-shrink-0"></div>
                            <p className="text-dark/90 font-medium text-base">Mensagem clara que converte curiosidade em agendamentos pagos.</p>
                        </li>
                    </ul>
                </RevealUp>
                
                <RevealUp className="brutalist-card p-8 md:p-10 flex flex-col justify-between min-h-[280px] group" delay={0.3}>
                    <div className="card-number-bg">04</div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white group-hover:bg-primary transition-colors duration-300 border-2 border-dark shadow-[2px_2px_0px_#121212] flex items-center justify-center flex-shrink-0">
                            <BarChart2 className="w-6 h-6 text-primary group-hover:text-dark transition-colors duration-300" />
                        </div>
                        <h3 className="font-black text-2xl md:text-3xl font-outfit tracking-normal uppercase">Escala PrevisÃ­vel</h3>
                    </div>
                    <ul className="space-y-3 mt-auto">
                        <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary border border-dark mt-1.5 flex-shrink-0"></div>
                            <p className="text-dark/90 font-medium text-base">OtimizaÃ§Ã£o semanal com foco no retorno, previsibilidade e lucro.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary border border-dark mt-1.5 flex-shrink-0"></div>
                            <p className="text-dark/90 font-medium text-base">Ajustes cirÃºrgicos para atrair cada vez mais e melhor.</p>
                        </li>
                    </ul>
                </RevealUp>
            </div>
        </div>
      </section>

      <div className="thick-divider"></div>

      <section className="py-24 md:py-32 px-6 bg-dark text-light relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
            <RevealUp className="lg:col-span-4">
                <span className="bg-primary text-dark font-bold px-3 py-1.5 uppercase tracking-widest text-[10px] border-2 border-dark inline-flex items-center gap-2 mb-6 shadow-[2px_2px_0px_#FEF7EF]">
                    <Filter className="w-3.5 h-3.5" /> O Filtro
                </span>
                <h2 className="text-4xl md:text-5xl font-black font-outfit tracking-normal uppercase leading-[1] mb-6">
                    CritÃ©rios de parceria.
                </h2>
                <p className="text-white/70 font-medium text-base leading-relaxed">
                    NÃ£o assumimos qualquer clÃ­nica. A nossa operaÃ§Ã£o exige um nÃ­vel de entrega e profissionalismo de ponta que apenas profissionais dedicados possuem.
                </p>
            </RevealUp>
            
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                <RevealLeft className="bg-primary text-dark border-2 border-dark p-6 md:p-8 shadow-[4px_4px_0px_#FEF7EF] flex flex-col hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#FEF7EF] transition-all">
                    <h3 className="text-2xl font-black font-outfit uppercase mb-6 pb-3 border-b-2 border-dark">A Nexbrand Ã© para quem:</h3>
                    <ul className="space-y-4 flex-grow">
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p className="font-bold text-base">Tem uma clÃ­nica ou consultÃ³rio e procura escala real.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p className="font-bold text-base">Ã um excelente profissional, mas trava na atraÃ§Ã£o de pacientes.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p className="font-bold text-base">Quer parar de brigar por preÃ§o e focar em procedimentos high-ticket.</p>
                        </li>
                    </ul>
                </RevealLeft>
                
                <RevealRight className="bg-white text-dark border-2 border-dark p-6 md:p-8 shadow-[4px_4px_0px_#FEF7EF] flex flex-col hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#FEF7EF] transition-all opacity-95">
                    <h3 className="text-2xl font-black font-outfit uppercase mb-6 pb-3 border-b-2 border-dark">NÃ£o somos para si se:</h3>
                    <ul className="space-y-4 flex-grow">
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                            <p className="font-bold text-base">Acredita em clÃ­nicas lotadas da noite para o dia com "hacks".</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                            <p className="font-bold text-base">Presta um mau atendimento e acha que o marketing vai salvÃ¡-lo.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                            <p className="font-bold text-base">NÃ£o tem estrutura para receber a alta demanda de pacientes.</p>
                        </li>
                    </ul>
                </RevealRight>
            </div>
        </div>
      </section>

      <div className="thick-divider"></div>

      <section className="py-24 md:py-32 px-6 bg-primary text-dark relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
            <RevealLeft className="relative w-full max-w-[380px]">
                <div className="absolute inset-0 border-2 border-dark bg-white translate-x-4 translate-y-4 z-0"></div>
                <div className="aspect-[3/4] border-2 border-dark bg-white relative z-10 overflow-hidden group">
                    <img src="/carlos.png" alt="Carlos Henrique - Founder & CEO" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white border-2 border-dark px-4 py-2 shadow-[4px_4px_0px_#121212] z-20 transform -rotate-2">
                    <span className="font-bold text-sm uppercase tracking-widest">Founder & CEO</span>
                </div>
            </RevealLeft>
            
            <RevealRight className="space-y-8 lg:flex-1">
                <h2 className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-black font-outfit uppercase leading-[0.85] tracking-normal">
                    Carlos<br/>Henrique
                </h2>
                
                <div className="bg-white border-2 border-dark p-6 md:p-8 shadow-[4px_4px_0px_#121212] max-w-2xl relative">
                    <Quote className="w-10 h-10 text-primary/20 absolute top-4 left-4 fill-current" />
                    <p className="text-xl md:text-2xl leading-snug font-bold relative z-10 pt-4">
                        "Meu objetivo nÃ£o Ã© ser apenas um apertador de botÃµes, mas sim colocar estratÃ©gias que tragam resultados para clÃ­nicas e profissionais de estÃ©tica."
                    </p>
                </div>
                
                <div className="pt-4 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border-2 border-dark flex items-center justify-center bg-dark text-white">
                        <BarChart2 className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-base uppercase tracking-widest">Carlos Henrique</p>
                        <p className="text-xs text-dark/70 font-medium uppercase">Fundador da Nexbrand</p>
                    </div>
                </div>
            </RevealRight>
        </div>
      </section>

      <div className="thick-divider"></div>

      <footer className="py-24 md:py-32 px-6 text-center bg-light text-dark relative" id="diagnostico">
        <div className="absolute inset-0 dot-pattern-dark opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            
            <RevealUp className="flex justify-center">
                <div className="w-20 h-20 bg-primary border-2 border-dark rounded-full flex items-center justify-center shadow-[4px_4px_0px_#121212]">
                    <Globe className="w-10 h-10 text-white" />
                </div>
            </RevealUp>

            <RevealUp delay={0.1}>
                <h2 className="text-5xl md:text-7xl font-black tracking-normal font-outfit leading-[0.95] uppercase">
                    Pronto para dominar<br/>a sua quota de mercado?
                </h2>
            </RevealUp>
            
            <RevealUp delay={0.2} className="inline-block relative">
                <div className="bg-white border-2 border-dark p-4 md:p-6 inline-flex items-center gap-4 shadow-[4px_4px_0px_#FF3C00] transform rotate-1">
                    <Lock className="w-6 h-6 text-dark flex-shrink-0" />
                    <p className="text-dark text-lg md:text-xl font-bold uppercase tracking-normal text-left">
                        Abrimos apenas <span className="text-primary font-black">2 novas vagas</span> por mÃªs<br className="hidden md:block" /> para gestÃ£o de trÃ¡fego. 
                    </p>
                </div>
            </RevealUp>
            
            <RevealUp delay={0.3} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <a href="https://wa.me/5566999825409" target="_blank" rel="noreferrer" onClick={() => handleTrackEvent('SubmitApplication', 'Footer_Candidatar')} className="bg-primary text-white px-10 py-5 font-bold text-base uppercase tracking-widest inline-flex items-center justify-center gap-3 border-2 border-dark shadow-[4px_4px_0px_#121212] hover:translate-y-1 hover:shadow-[2px_2px_0px_#121212] transition-all group">
                    Candidatar-se <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </RevealUp>

            <RevealUp delay={0.4} className="flex items-center justify-center gap-4 pt-12">
                <a href="https://instagram.com/_nexbrand/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-2 border-dark rounded-full flex items-center justify-center shadow-[2px_2px_0px_#121212] hover:translate-y-1 hover:shadow-none transition-all text-dark hover:text-primary">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/nexbrands2" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-2 border-dark rounded-full flex items-center justify-center shadow-[2px_2px_0px_#121212] hover:translate-y-1 hover:shadow-none transition-all text-dark hover:text-primary">
                    <Facebook className="w-5 h-5" />
                </a>
            </RevealUp>
            
            <div className="pt-16 flex flex-col items-center gap-6">
                <LogoTextDarkSvg className="h-8 md:h-10 w-auto opacity-80" />
                
                <div className="text-[10px] md:text-xs tracking-widest uppercase flex flex-col md:flex-row items-center justify-center gap-4 font-bold text-dark/50">
                    <span>&copy; 2026 NEXBRAND.</span>
                    <span className="hidden md:inline text-primary/50">â¢</span>
                    <span>DESIGN BY CARLOS HENRIQUE.</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
