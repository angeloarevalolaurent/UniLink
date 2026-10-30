import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/UniLinkAPI";
import UniLink from "../components/UniLink";
import QueryStatusIndicator from "../components/QueryStatusIndicator";

export default function AppLayout() {

    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 1,
        refetchOnWindowFocus: false
    })

    // 1. Carga inicial: Un loader elegante de pantalla completa
    if (isLoading) return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-3">
            <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Verificando sesión...</p>
        </div>
    );

    if (isError) return <Navigate to={'/auth/login'} />;
    
    // 2. Con datos: Renderizamos la app y el indicador flotante global juntos
    if (data) return (
        <>
            <UniLink data={data} />
            <QueryStatusIndicator />
        </>
    );
}