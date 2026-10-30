import { useEffect, useState } from "react"
import { social } from "../data/social"
import UniLinkInput from "../components/UniLinkInput"
import { isValidUrl } from "../utils"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "../api/UniLinkAPI"
import type { SocialNetwork, User } from "../types"
import { useNavigate } from "react-router-dom"


export default function LinkTreeView() {

  const [uniLiks, setUniLinks]= useState(social)

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const user : User = queryClient.getQueryData(['user'])!
  
  const {mutate} = useMutation({
    mutationFn:updateProfile,
    onError:(error)=>{
        toast.error(error.message)
      },
      onSuccess:() =>{
        toast.success('¡Casi listo! Presiona Guardar Cambios para aplicar la configuración.')
        navigate('/admin/profile')
      }
  })

  useEffect(()=> {
    const updateData = uniLiks.map(item => {
      const userLink = JSON.parse(user.links).find((link: SocialNetwork) => link.name === item.name)
      if (userLink) {
        return{...item, url: userLink.url, enabled: userLink.enabled}
      }
      return item
    })
    setUniLinks(updateData)
  },[])

  const handleUrlChange = ( e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const uploadLink = uniLiks.map(item => item.name === e.target.name ?
      {...item, url:e.target.value} : item)
    setUniLinks(uploadLink)

      queryClient.setQueryData(['user'], (prevData: User) => {
        return{
          ...prevData,
          links: JSON.stringify(uploadLink)
        }
      })
  }
  
  
  const handleEnableLink =(socialNetwork:string)=>{
    const updateLinks = uniLiks.map(link => {
      if(link.name === socialNetwork) {
        if (isValidUrl(link.url)) {
          return {...link, enabled:!link.enabled}
        }else{
          toast.error('URL no válida')
        }  
      }
      return link
    })
    setUniLinks(updateLinks)
    
    queryClient.setQueryData(['user'], (prevData : User) => {
      return{
        ...prevData,
        links: JSON.stringify(updateLinks)
      }
    })
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
            onClick={() => mutate(user)}
        >
            Siguiente
        </button>
      </div>
    </>
  )
}
