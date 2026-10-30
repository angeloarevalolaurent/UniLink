import { useForm } from "react-hook-form"
import ErrorMessage from "../components/ErrorMessage"
import slugify from "react-slugify"

export default function SearchForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            handle: ''
        }
    })

    const handle = watch('handle')

    const handleSearch = () => {
        const slug = slugify(handle)
        console.log(slug);
        
    }

  return (
    <>
        <form
            onSubmit={handleSubmit(handleSearch)}
            className="space-y-4 w-full"
            >
                <div className="space-y-2">
                    {/* Contenedor del Input con estilo Dark Mode Glassmorphism */}
                    <div className="relative flex items-center bg-slate-800/90 border border-slate-700/80 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 rounded-xl px-4 py-3 transition-all shadow-inner group">
                    
                        {/* Etiqueta / Prefijo devtree.com/ */}
                        <label
                            htmlFor="handle"
                            className="text-slate-400 font-mono text-sm sm:text-base font-semibold select-none pr-1 transition-colors group-focus-within:text-cyan-400"
                        >
                            devtree.com/
                        </label>

                        {/* Input estilizado */}
                        <input
                            type="text"
                            id="handle"
                            className="bg-transparent text-white font-medium placeholder-slate-500 focus:outline-none flex-1 text-sm sm:text-base border-none ring-0 focus:ring-0 p-0"
                            placeholder="elonmusk, zuck, jeffbezos"
                            {...register("handle", {
                            required: "Un Nombre de Usuario es obligatorio",
                            })}
                        />
                    </div>

                    {/* Mensaje de Error */}
                    {errors.handle && (
                    <div className="pt-1">
                        <ErrorMessage>{errors.handle.message}</ErrorMessage>
                    </div>
                    )}
                </div>

                {/* Botón de envío con degradado y resplandor Cyan */}
                <input
                    type="submit"
                    className="w-full bg-linear-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-900 font-black text-base sm:text-lg uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    value="Obtener mi DevTree"
                />
        </form>  
    </>
  )
}