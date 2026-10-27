import type { SocialNetwork } from "../types"

type DevTreeLinkProps = {
    link: SocialNetwork
}

export default function DevUniLink({ link }: DevTreeLinkProps) {
  return (
    <li className="list-none">
        <a 
            href={link.url} // Puedes enlazarlo con link.url o la ruta correspondiente si la tienes
            target="_blank"
            rel="noreferrer noopener"
            className="bg-white px-5 py-4 flex items-center gap-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 group"
        >
            {/* Contenedor del ícono social con un fondo sutil */}
            <div 
                className="w-10 h-10 bg-contain bg-no-repeat bg-center shrink-0 bg-gray-50 p-2 rounded-lg group-hover:scale-105 transition-transform"
                style={{ backgroundImage: `url('/social/icon_${link.name}.svg')` }}
                title={link.name}
            />

            {/* Texto descriptivo */}
            <p className="text-gray-700 font-medium">
                Visita mi <span className="font-bold text-gray-900 capitalize">{link.name}</span>
            </p>
        </a>
    </li>
  )
}