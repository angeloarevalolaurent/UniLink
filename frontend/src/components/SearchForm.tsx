import { useForm } from "react-hook-form"
import ErrorMessage from "../components/ErrorMessage"
import slugify from "react-slugify"
import { useMutation } from "@tanstack/react-query"
import { searchByHandle } from "../api/UniLinkAPI"
import { Link } from "react-router-dom"

export default function SearchForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            handle: ''
        }
    })

    const mutation = useMutation({
        mutationFn: searchByHandle
    })

    const handle = watch('handle')

    const handleSearch = () => {
        const slug = slugify(handle)
        mutation.mutate(slug);
        
    }

  return (
    <>
       <form
            onSubmit={handleSubmit(handleSearch)}
            className="space-y-4 w-full max-w-md mx-auto lg:mx-0"
            >
            <div className="space-y-2">
                {/* Contenedor del Input en Dark Mode / Glassmorphism */}
                <div className="relative flex items-center bg-slate-800/90 border border-slate-700/80 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 rounded-xl px-4 py-3 transition-all shadow-inner group">
                
                {/* Prefijo del Dominio */}
                <label
                    htmlFor="handle"
                    className="text-slate-400 font-mono text-sm sm:text-base font-semibold select-none pr-1 transition-colors group-focus-within:text-cyan-400"
                >
                    unilink.dev/
                </label>

                {/* Input de búsqueda */}
                    <input
                        type="text"
                        id="handle"
                        autoComplete="off"
                        spellCheck="false"
                        className="bg-transparent text-white font-semibold placeholder-slate-500 focus:outline-none flex-1 text-sm sm:text-base border-none ring-0 focus:ring-0 p-0 tracking-wide"
                        placeholder="angeloarevalo, arevalo-17, angelodev"
                        {...register("handle", {
                            required: "Un Nombre de Usuario es obligatorio",
                            minLength: {
                                value: 4,
                                message: "El handle debe tener al menos 4 caracteres"
                            }
                        })}
                        
                    />
                </div>

                {/* Error de validación local (Form) */}
                {errors.handle && (
                <div className="pt-1">
                    <ErrorMessage>{errors.handle.message}</ErrorMessage>
                </div>
                )}
            </div>

            {/* SECCIÓN DE ESTADOS DE LA MUTACIÓN (React Query) */}
            <div className="space-y-3">
                {/* Estado: Cargando */}
                {mutation.isPending && (
                <div className="flex items-center justify-center gap-3 p-3.5 bg-slate-800/80 border border-slate-700/80 rounded-xl shadow-lg backdrop-blur-md">
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-300 font-medium text-sm">
                    Buscando disponibilidad...
                    </p>
                </div>
                )}

                {/* Estado: Error (Handle no disponible o error de servidor) */}
                {mutation.error && (
                <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-center shadow-lg backdrop-blur-md">
                    <p className="text-rose-400 font-bold text-sm">
                    {mutation.error.message}
                    </p>
                </div>
                )}

                {/* Estado: Éxito / Disponible */}
                {mutation.data && (
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-center space-y-2 shadow-lg backdrop-blur-md">
                    <p className="text-cyan-400 font-bold text-sm sm:text-base">
                    {mutation.data}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm">
                    ¿Quieres reclamar este handle?{" "}
                    <Link
                        to={"/auth/register"}
                        state={{ handle: slugify(handle) }}
                        className="inline-flex items-center gap-1 font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                    >
                        Ir a Registro &rarr;
                    </Link>
                    </p>
                </div>
                )}
            </div>

            {/* Botón Submit CTA con Gradiente Cyan */}
            <input
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-linear-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-black text-base uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                value="Obtener mi UniLink"
            />
       </form>  
    </>
  )
}