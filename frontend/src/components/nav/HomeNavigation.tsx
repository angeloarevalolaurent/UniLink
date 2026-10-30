import { Link } from 'react-router-dom'

export default function HomeNavigation() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Botón de Iniciar Sesión */}
      <Link
        className="text-slate-300 hover:text-white px-3.5 py-2 uppercase font-bold text-xs sm:text-sm tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
        to="/auth/login"
      >
        Iniciar Sesión
      </Link>
    
      {/* Botón de Registro con Gradiente y Resplandor Cyan */}
      <Link
        className="bg-linear-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 px-4 sm:px-5 py-2.5 uppercase font-black text-xs sm:text-sm tracking-wider rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
        to="/auth/register"
      >
        Registrarme
      </Link>
    </div>
  )
}