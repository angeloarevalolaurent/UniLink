import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

type AdminNavigationProps = {
  userHandle?: string
};

export default function AdminNavigation({ userHandle }: AdminNavigationProps) {
  const queryClient = useQueryClient();
  const [copied, setCopied] = useState(false);

  const logout = () => {
    localStorage.removeItem('AUTH_TOKEN');
    queryClient.invalidateQueries({ queryKey: ['user'] });
  };

  const handleCopyLink = () => {
    if (!userHandle) return;
    const profileUrl = `${window.location.origin}/${userHandle}`;
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Botón: Copiar Enlace al Portapapeles */}
      {userHandle && (
        <button
          type="button"
          onClick={handleCopyLink}
          className="group flex items-center gap-2 bg-slate-800/90 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 border border-slate-700/80 hover:border-cyan-500/30 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-cyan-500/10 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
        >
          {copied ? (
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          )}
          <span>{copied ? "¡Copiado!" : "Compartir"}</span>
        </button>
      )}

      {/* Botón: Abrir Perfil Público en Nueva Pestaña */}
      {userHandle && (
        <a
          href={`/${userHandle}`}
          target="_blank"
          rel="noreferrer"
          className="group hidden sm:flex items-center gap-1.5 bg-slate-800/90 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 border border-slate-700/80 hover:border-cyan-500/30 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-cyan-500/10 active:scale-95"
        >
          <span>Ver mi Bio</span>
          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}

      {/* Tu Botón Original de Cerrar Sesión */}
      <button
        type="button"
        onClick={logout}
        className="group flex items-center gap-2 bg-slate-800/90 hover:bg-rose-500/10 text-slate-300 hover:text-rose-400 border border-slate-700/80 hover:border-rose-500/30 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-rose-500/10 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500/40"
      >
        {/* Icono Vectorial de Cerrar Sesión */}
        <svg 
          className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
          />
        </svg>
        
        <span>Cerrar Sesión</span>
      </button>
    </div>
  );
}