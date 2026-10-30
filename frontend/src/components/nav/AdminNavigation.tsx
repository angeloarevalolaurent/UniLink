import { useQueryClient } from "@tanstack/react-query";


export default function AdminNavigation() {

  const queryClient = useQueryClient()

  const logout = () =>{
    localStorage.removeItem('AUTH_TOKEN')
    queryClient.invalidateQueries({queryKey: ['user']})
  }

  return (
    <button
      type="button"
      onClick={logout}
      className="flex items-center gap-2 bg-slate-800/90 hover:bg-rose-500/10 text-slate-300 hover:text-rose-400 border border-slate-700/80 hover:border-rose-500/30 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-rose-500/10 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500/40"
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
  );
}