import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdminNavigation from "./nav/AdminNavigation";
import HomeNavigation from "./nav/HomeNavigation";
import type { User } from "../types"; // Importa tu interfaz/tipo de User (o ajusta la ruta)

export default function Header() {
  const location = useLocation();

  // Le indicamos a TypeScript que 'data' es del tipo User
  const { data: user } = useQuery<User>({
    queryKey: ['user'],
  });

  return (
    <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/80 sticky top-0 z-50 transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* LOGO E IDENTIDAD VECTORIAL */}
        <Link 
          to="/admin" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-xl p-1 transition-all"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-xl blur-md opacity-40 group-hover:opacity-90 group-hover:scale-110 transition duration-300" />
            
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 bg-slate-900 border border-slate-700/80 group-hover:border-cyan-400/60 rounded-xl flex items-center justify-center text-cyan-400 shadow-md transition-colors">
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
          </div>
          
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Uni<span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Link</span>
          </span>
        </Link>

        {/* NAVEGACIÓN DINÁMICA */}
        <nav className="flex items-center">
          {location.pathname === "/" ? (
            <HomeNavigation />
          ) : (
            <AdminNavigation userHandle={user?.handle} />
          )}
        </nav>
        
      </div>
    </header>
  );
}