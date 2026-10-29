
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import NavigationTabs from '../components/NavegationTabs';
import type { SocialNetwork, User } from "../types";
import { useEffect, useState } from "react";
import DevUniLink from "./DevUniLink";

type UniLinkProps = {
    data: User
}

export default function UniLink({data}: UniLinkProps) {

   const [enabledLinks, setEnabledLinks] = useState<SocialNetwork[]>
   (JSON.parse(data.links).filter((item: SocialNetwork) => item.enabled))


    useEffect(()=> {
        setEnabledLinks(JSON.parse(data.links).filter((item: SocialNetwork) => item.enabled))
    },[data])
    return (
        <>
            <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-md">
                <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col md:flex-row items-center md:justify-between">
                    <div className="w-full flex justify-center md:justify-start md:w-1/3">
                        <img src="/logo.png" className="h-12 w-12 object-contain sm:h-14 sm:w-14 drop-shadow-sm" alt="Logo" />
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
                        <button
                            className="bg-cyan-500 hover:bg-cyan-400 active:scale-95 transition-all px-5 py-2.5 text-white uppercase font-bold text-xs tracking-wider rounded-xl shadow-lg shadow-cyan-500/20 cursor-pointer"
                            onClick={() => {}}
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </header>

            <div className="bg-slate-50 min-h-[calc(100vh-5rem)] py-10">
                <main className="mx-auto max-w-6xl px-6 md:px-0">
                    <NavigationTabs/>
                    
                    {/* Badge destacado para el enlace al Perfil */}
                    <div className="flex justify-end mt-6">
                        <Link 
                            className="group inline-flex items-center gap-2.5 bg-white border border-slate-200 hover:border-cyan-400 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                            to={`/${data.handle}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-cyan-500 transition-colors">
                                Visitar Mi Perfil
                            </span>
                            <span className="text-sm font-extrabold text-slate-800 bg-slate-100 group-hover:bg-cyan-50 group-hover:text-cyan-600 px-2.5 py-0.5 rounded-md transition-colors">
                                /{data.handle}
                            </span>
                            <svg className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 mt-8">
                        <div className="flex-1 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 p-8">
                            <Outlet />
                        </div>
                         <div className="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6 shadow-lg rounded-2xl flex flex-col items-center">
                            {/* Handle / Usuario */}
                            <p className="text-3xl font-extrabold text-center text-white tracking-wide">
                                {data.handle}
                            </p>

                            {/* Imagen de Perfil (Corregido max-w y estilizado como avatar) */}
                            {data.image && (
                                <img 
                                    src={data.image} 
                                    alt="Imagen de Perfil" 
                                    className="mx-auto w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-md border-4 border-slate-700" 
                                />
                            )}

                            {/* Descripción */}
                            {data.description && (
                                <p className="text-center text-base font-normal text-slate-300 px-2">
                                    {data.description}
                                </p>
                            )}

                            <div className="mt-20 flex flex-col gap-5">
                                {enabledLinks.map(link => (
                              
                                   <DevUniLink
                                        key={link.name}
                                        link={link}
                                   />
                                ))}
                            </div>

                        </div>
                    </div>
                </main>
            </div>
            <Toaster position="top-right" richColors />
        </>
    )
}