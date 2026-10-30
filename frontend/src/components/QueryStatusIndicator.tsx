import { useIsFetching } from "@tanstack/react-query";

export default function QueryStatusIndicator() {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/40 px-4 py-3 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      
      {/* Contenedor del Isotipo con Animación de Conectividad */}
      <div className="relative flex items-center justify-center w-8 h-8">
        {/* Onda expansiva de fondo (Pulso Radar) */}
        <div className="absolute inset-0 bg-cyan-400/20 rounded-xl animate-ping opacity-75" />
        
        {/* Halo de luz estático */}
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl blur-xs opacity-50" />
        
        {/* Núcleo del icono vectorial giratorio */}
        <div className="relative w-8 h-8 bg-slate-950 border border-cyan-400/60 rounded-xl flex items-center justify-center text-cyan-400 shadow-inner">
          <svg 
            className="w-4 h-4 animate-spin" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
      </div>

      {/* Textos y barra de progreso decorativa sutil */}
      <div className="flex flex-col gap-1 pr-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-white">
            Uni<span className="text-cyan-400">Link</span>
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            En vivo
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-slate-400 tracking-tight">
            Sincronizando nodos...
          </span>
          {/* Puntos animados de carga */}
          <div className="flex gap-0.5">
            <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

    </div>
  );
}