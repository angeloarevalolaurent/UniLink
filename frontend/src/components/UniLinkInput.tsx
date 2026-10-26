import type { UniLink } from "../types"

type UniLinkInputProps={
    link: UniLink
}

export default function UniLinkInput({link}:UniLinkInputProps) {

  return (
    <>
        <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-4 rounded-xl border border-gray-100 flex items-center gap-4">
        
            {/* Contenedor del ícono social */}
            <div 
                className="w-10 h-10 bg-contain bg-no-repeat bg-center shrink-0 bg-gray-50 p-2 rounded-lg"
                style={{ backgroundImage: `url('/social/icon_${link.name}.svg')` }}
                title={link.name}
            />

            {/* Input de enlace */}
            <input 
                type="text" 
                placeholder={`URL de ${link.name}`}
                className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg px-4 py-2.5 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            
            />

        </div>
    </>
  )
}
