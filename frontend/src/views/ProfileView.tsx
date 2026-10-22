export default function ProfileView() {

    return (
        <form 
            className="space-y-6"
            onSubmit={() => {}}
        >
            <div className="border-b border-slate-100 pb-4 mb-6">
                <legend className="text-2xl font-black text-slate-800 tracking-tight">
                    Editar Información
                </legend>
                <p className="text-sm text-slate-500 mt-1">
                    Actualiza tus datos públicos y tu imagen de perfil.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="handle"
                    className="text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                    Handle:
                </label>
                <div className="relative flex items-center">
                    <span className="absolute left-4 text-slate-400 font-semibold">/</span>
                    <input
                        id="handle"
                        type="text"
                        className="w-full border border-slate-200 bg-slate-50/50 rounded-xl py-3.5 pl-8 pr-4 placeholder-slate-400 text-slate-700 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="tu-nombre-de-usuario"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="description"
                    className="text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                    Descripción:
                </label>
                <textarea
                    id="description"
                    rows={4}
                    className="w-full border border-slate-200 bg-slate-50/50 rounded-xl p-4 placeholder-slate-400 text-slate-700 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos un poco sobre ti..."
                />
            </div>

            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="image"
                    className="text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                    Imagen:
                </label>
                <input
                    id="image"
                    type="file"
                    name="handle"
                    className="w-full border border-slate-200 bg-slate-50/50 rounded-xl p-3 text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-wider file:bg-cyan-550 file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 cursor-pointer transition-all file:transition-colors"
                    accept="image/*"
                    onChange={ () => {} }
                />
            </div>

            <div className="pt-4">
                <input
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 active:scale-[0.99] transition-all py-4 text-white text-sm w-full uppercase tracking-wider rounded-xl font-extrabold cursor-pointer shadow-lg shadow-cyan-500/20"
                    value='Guardar Cambios'
                />
            </div>
        </form>
    )
}