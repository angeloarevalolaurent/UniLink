import { useState } from "react"
import { social } from "../data/social"
import UniLinkInput from "../components/UniLinkInput"

export default function LinkTreeView() {

  const [uniLiks, setUniLinks]= useState(social)

  const handleLink = ( e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const uploadLink = uniLiks.map(item => item.name === e.target.name ?
      {...item, url:e.target.value} : item)
    setUniLinks(uploadLink)
  }

  return (
    <>
    <div className="space-y-5">
      {uniLiks.map(link=>
        <UniLinkInput
          key={link.name}
          link={link}
          handleLink={handleLink}
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
