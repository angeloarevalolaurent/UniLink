import Header from "../components/Header"
import HeaderLayout from "../components/HeaderLayout"
import SearchForm from "../components/SearchForm"


export const HomeView = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-900">
      {/* Navegación Superior */}
      <Header />

      {/* Hero Section / Contenido Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: Descripción del Proyecto + Formulario */}
          <div className="space-y-6 text-center lg:text-left order-1">
            {/* Badge de novedad */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Tu presencia digital en un solo lugar
            </span>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Todas tus redes en <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">un solo enlace</span>
            </h1>

            {/* Descripción del Proyecto */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Únete a <strong className="text-white">UniLink</strong> y comparte tu perfil personalizado con tus seguidores. Centraliza tu portafolio, código y redes sociales desde una sola bio elegante y en modo oscuro.
            </p>

            {/* Formulario de Búsqueda de Handle */}
            <div className="pt-2 max-w-md mx-auto lg:mx-0">
              <SearchForm />
            </div>
          </div>

          {/* COLUMNA DERECHA: Celular e Ilustración Interactiva */}
          <div className="order-2 flex justify-center items-center">
            <HeaderLayout />
          </div>

        </div>
      </main>
    </div>
  )
}