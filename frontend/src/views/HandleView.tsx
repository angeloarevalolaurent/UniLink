import { useQuery } from "@tanstack/react-query"
import { Navigate, useParams } from "react-router-dom"
import { getUserByHandle } from "../api/UniLinkAPI"
import { HandleData } from "../components/HandleData"

export default function HandleView() {
    const params = useParams()
    const handle = params.handle!

    const {data, error, isLoading} = useQuery({
        queryFn: () => getUserByHandle(handle),
        queryKey: ['handle', handle],
        retry: 2
    })

    // 1. Cargador elegante para la carga inicial de esta vista
    if (isLoading) return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-3">
            <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Cargando perfil...</p>
        </div>
    )

    if (error) return <Navigate to={'/404'}/> 

    if (data) return <HandleData data={data}/>
}