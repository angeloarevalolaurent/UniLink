import React, { useState,type SVGProps, type ReactNode } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

// Iconos SVG limpios y optimizados
const Icons = {
  Github: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Twitter: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Twitch: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M11.571 4.714h1.715v5.143h-1.715zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
    </svg>
  ),
  Tiktok: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
  Youtube: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
  Globe: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Check: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  MousePointer: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" {...props}>
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </svg>
  ),
};

type AccentType = 'cyan' | 'emerald' | 'purple';

interface SocialLinkItem {
  id: string;
  name: string;
  icon: React.FC<IconProps>;
  url: string;
  enabled: boolean;
  color: string;
}

interface FloatingBadgeItem {
  id: string;
  name: string;
  icon: React.FC<IconProps>;
  position: string;
  anim: string;
  bgColor: string;
}

type HeaderLayoutProps = {
  children?: ReactNode; // Permite inyectar el componente SearchHandleForm aquí mismo
};

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  const [accentColor, setAccentColor] = useState<AccentType>('cyan');
  const [highlightedSocial, setHighlightedSocial] = useState<string | null>(null);
  
  const [links, setLinks] = useState<SocialLinkItem[]>([
    { id: 'github', name: 'GitHub', icon: Icons.Github, url: 'github.com/unilink', enabled: true, color: 'text-slate-900' },
    { id: 'twitter', name: 'X (Twitter)', icon: Icons.Twitter, url: 'x.com/unilink', enabled: true, color: 'text-slate-900' },
    { id: 'twitch', name: 'Twitch', icon: Icons.Twitch, url: 'twitch.tv/unilink', enabled: true, color: 'text-purple-600' },
    { id: 'tiktok', name: 'TikTok', icon: Icons.Tiktok, url: 'tiktok.com/@unilink', enabled: true, color: 'text-rose-500' },
    { id: 'youtube', name: 'YouTube', icon: Icons.Youtube, url: 'youtube.com/@unilink', enabled: true, color: 'text-red-600' },
    { id: 'linkedin', name: 'LinkedIn', icon: Icons.Linkedin, url: 'linkedin.com/in/unilink', enabled: false, color: 'text-blue-600' },
  ]);

  const toggleLink = (id: string) => {
    setLinks(links.map(link => link.id === id ? { ...link, enabled: !link.enabled } : link));
  };

  const themeStyles = {
    cyan: {
      accentText: 'text-cyan-400',
      accentBg: 'bg-cyan-400',
      accentBorder: 'border-cyan-400',
      accentGlow: 'shadow-[0_0_30px_rgba(34,211,238,0.3)]',
      gradientBlob: 'from-cyan-500/25 via-teal-500/15 to-emerald-500/5',
      buttonActive: 'bg-cyan-400 text-slate-950 font-bold',
      badgeBorder: 'group-hover:border-cyan-400',
      ringColor: 'ring-cyan-400',
    },
    emerald: {
      accentText: 'text-emerald-400',
      accentBg: 'bg-emerald-400',
      accentBorder: 'border-emerald-400',
      accentGlow: 'shadow-[0_0_30px_rgba(52,211,153,0.3)]',
      gradientBlob: 'from-emerald-500/25 via-green-500/15 to-teal-500/5',
      buttonActive: 'bg-emerald-400 text-slate-950 font-bold',
      badgeBorder: 'group-hover:border-emerald-400',
      ringColor: 'ring-emerald-400',
    },
    purple: {
      accentText: 'text-purple-400',
      accentBg: 'bg-purple-400',
      accentBorder: 'border-purple-400',
      accentGlow: 'shadow-[0_0_30px_rgba(192,132,252,0.3)]',
      gradientBlob: 'from-purple-500/25 via-indigo-500/15 to-pink-500/5',
      buttonActive: 'bg-purple-400 text-slate-950 font-bold',
      badgeBorder: 'group-hover:border-purple-400',
      ringColor: 'ring-purple-400',
    }
  }[accentColor];

  const floatingBadges: FloatingBadgeItem[] = [
    {
      id: 'github',
      name: 'GitHub',
      icon: Icons.Github,
      position: 'top-6 -left-2 sm:-left-8',
      anim: 'animate-float-slow',
      bgColor: 'bg-slate-950/90 text-white',
    },
    {
      id: 'twitter',
      name: 'X',
      icon: Icons.Twitter,
      position: 'top-1/3 -right-4 sm:-right-12',
      anim: 'animate-float-delayed',
      bgColor: 'bg-slate-950/90 text-white',
    },
    {
      id: 'twitch',
      name: 'Twitch',
      icon: Icons.Twitch,
      position: 'bottom-20 -left-4 sm:-left-10',
      anim: 'animate-float-reverse',
      bgColor: 'bg-purple-950/90 text-purple-300',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: Icons.Tiktok,
      position: 'bottom-8 -right-2 sm:-right-8',
      anim: 'animate-float-slow',
      bgColor: 'bg-slate-950/90 text-rose-400',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center relative select-none">
      
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1.5deg); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-1.5deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(2deg); }
        }
        .animate-float-slow { animation: floatSlow 5s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 6s ease-in-out infinite 1.5s; }
        .animate-float-reverse { animation: floatReverse 5.5s ease-in-out infinite 0.7s; }
      `}</style>

      {/* CONTENEDOR PRINCIPAL DEL MOCKUP CON ANIMACIONES */}
      <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center min-h-130 my-2">

        {/* Fondo Orgánico Difuminado */}
        <div 
          className={`absolute inset-0 m-auto w-70 sm:w-95 h-70 sm:h-95 rounded-full bg-linear-to-tr ${themeStyles.gradientBlob} blur-[60px] pointer-events-none transition-all duration-700 ease-in-out`} 
        />

        {/* MOCKUP DEL SMARTPHONE */}
        <div className={`relative z-10 w-67.5 sm:w-77.5 bg-slate-900/95 border-[5px] border-slate-800 rounded-[38px] p-3.5 shadow-2xl backdrop-blur-xl ${themeStyles.accentGlow} transition-all duration-300`}>
          
          {/* Notch del teléfono */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-b-xl z-20 flex items-center justify-center gap-2">
            <div className="w-8 h-1 bg-slate-700 rounded-full" />
            <div className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
          </div>

          {/* Contenido de la pantalla */}
          <div className="pt-5 pb-3 px-1.5 flex flex-col items-center">
            
            {/* Avatar */}
            <div className="relative mb-2.5">
              <div className={`w-16 h-16 rounded-full bg-slate-800 p-0.5 border-2 ${themeStyles.accentBorder} shadow-md overflow-hidden`}>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256" 
                  alt="Avatar" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className={`absolute bottom-0 right-0 p-0.5 rounded-full ${themeStyles.accentBg} text-slate-950 text-[9px]`}>
                <Icons.Check />
              </span>
            </div>

            {/* Handle & Mini Bio */}
            <h3 className="text-white font-bold text-sm tracking-tight">
              @angelo_arevalo
            </h3>
            <p className="text-slate-400 text-[11px] text-center mt-0.5 mb-4 px-2 line-clamp-2">
              Full-Stack Dev 💻 | Todas mis redes en un enlace principal 🚀
            </p>

            {/* Tarjetas de Enlaces Interactivos */}
            <div className="w-full space-y-2">
              {links.map((link) => {
                const IconComponent = link.icon;
                const isHighlighted = highlightedSocial === link.id;

                return (
                  <div
                    key={link.id}
                    onClick={() => toggleLink(link.id)}
                    className={`group relative flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 cursor-pointer select-none ${
                      link.enabled 
                        ? 'bg-white shadow-sm hover:shadow-md' 
                        : 'bg-slate-800/40 opacity-40 border border-dashed border-slate-700'
                    } ${isHighlighted ? `ring-2 ${themeStyles.ringColor} scale-[1.02]` : ''}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 ${link.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className={`text-[11px] font-bold ${link.enabled ? 'text-slate-900' : 'text-slate-400'}`}>
                          {link.name}
                        </p>
                        <p className="text-[9px] text-slate-500 font-mono">
                          {link.url}
                        </p>
                      </div>
                    </div>

                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                      link.enabled ? 'bg-slate-100 text-slate-700' : 'bg-slate-700 text-slate-400'
                    }`}>
                      {link.enabled ? 'ON' : 'OFF'}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* INSIGNIAS FLOTANTES */}
        {floatingBadges.map((badge) => {
          const BadgeIcon = badge.icon;
          const isHighlighted = highlightedSocial === badge.id;

          return (
            <div
              key={badge.id}
              onClick={() => setHighlightedSocial(highlightedSocial === badge.id ? null : badge.id)}
              onMouseEnter={() => setHighlightedSocial(badge.id)}
              onMouseLeave={() => setHighlightedSocial(null)}
              className={`absolute ${badge.position} ${badge.anim} z-30 cursor-pointer group`}
            >
              <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-700/80 shadow-xl backdrop-blur-md transition-all duration-300 ${badge.bgColor} ${themeStyles.badgeBorder} ${isHighlighted ? `scale-105 border-2 ${themeStyles.accentBorder}` : 'hover:scale-102'}`}>
                <div className="p-1 rounded-lg bg-slate-800 text-white">
                  <BadgeIcon className="w-4 h-4" />
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-[11px] font-bold text-white leading-none">{badge.name}</p>
                  <p className={`text-[9px] mt-0.5 ${themeStyles.accentText}`}>Ver en vivo</p>
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* SELECTOR DE TEMA RÁPIDO (Opcional visual) */}
      <div className="mt-2 flex items-center gap-1.5 bg-slate-900/80 border border-slate-800/80 px-3 py-1 rounded-full backdrop-blur-md">
        <span className="text-[11px] text-slate-400 font-medium">Tema:</span>
        <button onClick={() => setAccentColor('cyan')} className={`px-2 py-0.5 rounded text-[11px] transition-all ${accentColor === 'cyan' ? themeStyles.buttonActive : 'text-slate-400 hover:text-white'}`}>Cyan</button>
        <button onClick={() => setAccentColor('emerald')} className={`px-2 py-0.5 rounded text-[11px] transition-all ${accentColor === 'emerald' ? themeStyles.buttonActive : 'text-slate-400 hover:text-white'}`}>Esmeralda</button>
        <button onClick={() => setAccentColor('purple')} className={`px-2 py-0.5 rounded text-[11px] transition-all ${accentColor === 'purple' ? themeStyles.buttonActive : 'text-slate-400 hover:text-white'}`}>Púrpura</button>
      </div>

      {/* SLOT PARA INYECTAR EL FORMULARIO DE BÚSQUEDA DE HANDLE */}
      {children && (
        <div className="w-full mt-6">
          {children}
        </div>
      )}

    </div>
  );
}