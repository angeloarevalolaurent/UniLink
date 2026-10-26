import type { UniLink } from "../types"
import {Switch} from '@headlessui/react'
import { classNames } from "../utils"  

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


            <Switch
                checked={link.enabled}
                onChange={() => {}}
                className={classNames(
                    link.enabled ? 'bg-blue-500' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        link.enabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                />
            </Switch>
        </div>
    </>
  )
}
