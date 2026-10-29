import type { SocialNetwork, UserHandle } from "../types"

type HandleDataProps = {
  data: UserHandle
}

export const HandleData = ({ data }: HandleDataProps) => {
  const links: SocialNetwork[] = JSON.parse(data.links).filter(
    (link: SocialNetwork) => link.enabled
  )

  return (
    <div className="space-y-6 max-w-lg mx-auto text-center">
      {/* Información del Perfil */}
      <div className="flex flex-col items-center gap-3">
        {data.image && (
          <img
            src={data.image}
            alt={`Avatar de ${data.handle}`}
            className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-slate-700/50"
          />
        )}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          @{data.handle}
        </h1>
        {data.description && (
          <p className="text-slate-300 text-sm max-w-md leading-relaxed">
            {data.description}
          </p>
        )}
      </div>

      {/* Lista de Enlaces Activos */}
      <div className="flex flex-col gap-3.5 mt-8">
        {links.length ? (
          links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-4 bg-white hover:bg-slate-100 border border-slate-200 p-4 rounded-xl shadow-md transition-all duration-200 group hover:-translate-y-0.5"
            >
              <img
                src={`/social/icon_${link.name}.svg`}
                alt={link.name}
                className="w-7 h-7 object-contain"
              />
              <p className="text-slate-800 font-bold capitalize text-sm group-hover:text-cyan-600 transition-colors">
                Visita mi {link.name}
              </p>
            </a>
          ))
        ) : (
          <p className="text-slate-400 text-sm italic pt-4">
            No hay enlaces habilitados en este perfil.
          </p>
        )}
      </div>
    </div>
  )
}