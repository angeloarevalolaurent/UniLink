import type { SocialNetwork, UserHandle } from "../types"

type HandleDataProps = {
  data: UserHandle
}

export const HandleData = ({ data }: HandleDataProps) => {
  // Parsing seguro de los enlaces
  let links: SocialNetwork[] = []
  try {
    links = JSON.parse(data.links).filter(
      (link: SocialNetwork) => link.enabled
    )
  } catch {
    links = []
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 py-12 space-y-8 select-none relative overflow-hidden">
      
      {/* Estilos de animación 3D personalizados */}
      <style>{`
        @keyframes float3D {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-8px) rotateX(2deg) rotateY(-2deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-float-3d { animation: float3D 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }
        
        .perspective-container {
          perspective: 1000px;
        }
        .card-3d {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, border-color 0.3s ease;
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          transform: translateY(-6px) scale(1.02) rotateX(2deg);
          box-shadow: 0 20px 40px -15px rgba(34, 211, 238, 0.25);
        }
      `}</style>

      {/* Fondo de Luces Ambientales 3D */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-linear-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/10 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" />

      {/* SECCIÓN DE PERFIL / CABECERA CON PROFUNDIDAD */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-5">
        
        {/* Contenedor del Avatar con Marco 3D */}
        <div className="relative group animate-float-3d">
          {/* Halo de luz tridimensional */}
          <div className="absolute -inset-2 bg-linear-to-b from-cyan-400 via-blue-500 to-indigo-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />
          
          {/* Anillo exterior con borde biselado */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1.5 bg-linear-to-b from-slate-700/80 to-slate-900/90 border border-slate-600/50 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            {data.image ? (
              <img
                src={data.image}
                alt={`Avatar de ${data.handle}`}
                className="w-full h-full object-cover rounded-full shadow-inner group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-cyan-400 font-black text-4xl shadow-inner">
                {data.handle.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Badge de Verificado con Sombra Flotante */}
          <div 
            title="Perfil verificado" 
            className="absolute bottom-1 right-1 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-950 p-2 rounded-full ring-4 ring-slate-950 shadow-[0_5px_15px_rgba(34,211,238,0.5)] transform hover:scale-110 transition-transform"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Textos del Perfil con Tipografía de Impacto */}
        <div className="space-y-2.5 max-w-sm">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-slate-100 to-slate-300 tracking-tight drop-shadow-sm">
            @{data.handle}
          </h1>

          {data.description && (
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium px-4 py-2 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md shadow-inner">
              {data.description}
            </p>
          )}
        </div>

      </div>

      {/* LISTA DE ENLACES CON EFECTO 3D GLASSMORPHISM */}
      <div className="perspective-container flex flex-col gap-4 pt-2 relative z-10">
        {links.length > 0 ? (
          links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              style={{ animationDelay: `${index * 100}ms` }}
              className="card-3d group relative flex items-center justify-between bg-slate-900/80 hover:bg-slate-900 text-white p-4 rounded-2xl border border-slate-700/60 hover:border-cyan-400/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] backdrop-blur-xl cursor-pointer"
            >
              {/* Brillo interior en hover */}
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Contenido (Icono + Texto) */}
              <div className="relative z-10 flex items-center gap-4 min-w-0 pr-2">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-700 flex items-center justify-center shrink-0 p-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                  <img
                    src={`/social/icon_${link.name}.svg`}
                    alt={link.name}
                    className="w-full h-full object-contain filter drop-shadow"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm sm:text-base text-white capitalize tracking-wide group-hover:text-cyan-400 transition-colors">
                    {link.name}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono tracking-tight truncate">
                    {link.url.replace(/^https?:\/\//, '')}
                  </span>
                </div>
              </div>

              {/* Indicador de Enlace Externo con Movimiento 3D */}
              <div className="relative z-10 w-9 h-9 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-slate-950 group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:translate-x-1 transition-all duration-300 shrink-0 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))
        ) : (
          <div className="bg-slate-900/50 border border-dashed border-slate-800 rounded-2xl p-8 text-center backdrop-blur-md">
            <p className="text-slate-400 text-sm font-medium">
              Este perfil no tiene enlaces activos por el momento.
            </p>
          </div>
        )}
      </div>

      {/* FOOTER DISCRETO "Powered by UniLink" */}
      <div className="relative z-10 pt-6 text-center">
        <a 
          href="/" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 text-xs font-semibold text-slate-400 hover:text-cyan-400 backdrop-blur-md transition-all shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          <span>UniLink</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>Crea tu bio aquí</span>
        </a>
      </div>

    </div>
  )
}