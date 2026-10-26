import { useState } from "react"
import { social } from "../data/social"
import UniLinkInput from "../components/UniLinkInput"

export default function LinkTreeView() {

  const [uniLiks, setUniLinks]= useState(social)

  const handleUrlChange = ( e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const uploadLink = uniLiks.map(item => item.name === e.target.name ?
      {...item, url:e.target.value} : item)
    setUniLinks(uploadLink)
  }


  const handleEnableLink =(socialNerwork:string)=>{
    const enabledLinks = uniLiks.map(link => link.name === socialNerwork ?
                          {...link, enabled: !link.enabled} : link)
    setUniLinks(enabledLinks)                     
  }

  return (
    <>
    <div className="space-y-5">
      {uniLiks.map(link=>
        <UniLinkInput
          key={link.name}
          link={link}
          handleUrlChange={handleUrlChange}
          handleEnableLink={handleEnableLink}
        />
      )}

       <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-500 p-3 text-slate-900 font-bold uppercase rounded-lg transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 cursor-pointer"
           
        >
            Guardar Cambios
        </button>
      </div>
    </>
  )
}
