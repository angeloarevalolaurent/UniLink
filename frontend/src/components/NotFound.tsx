import { Link } from 'react-router-dom' // O el sistema de rutas que uses (ej. wouter, next/link)

export const NotFoundView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="space-y-4 max-w-md">
        <p className="text-7xl font-extrabold text-cyan-400">404</p>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Usuario no encontrado
        </h1>
        <p className="text-slate-400 text-sm">
          Lo sentimos, la página o el perfil de UniLink que buscas no existe o ha sido desactivado.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-lg"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}