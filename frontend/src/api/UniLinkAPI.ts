import { isAxiosError } from "axios";
import api from "../config/axios";
import type { UpdateProfilePayload, User } from "../types";


export async function getUser(){
      try {
        const {data} = await api<User>(`/user`)
        return data

      } catch (error) {

        if (isAxiosError(error) && error.response) {
          console.log(error.response.data.error);
        }
      }
}

export async function updateProfile(formData:UpdateProfilePayload) {
    try {
      const {data} = await api.patch<string>(`/user`, formData)
      return data
      
    } catch (error) {

      if (isAxiosError(error) && error.response) {
         console.log(error.response.data.error);
      }
      
    }
}

export async function uploadImage(file:File){
  
  const formData = new FormData()
        formData.append('file',file)

  try {
    const {data} = await api.post('/user/image',formData)
    return data

  } catch (error) {
    if (isAxiosError(error) && error.response) {
         console.log(error.response.data.error);
    }
  }
}

export async function getUserByHandle(handle: string){

  try {
    const url = `${handle}`
    const {data} = await api(url)
    return data

  } catch (error) {
    if (isAxiosError(error) && error.response) {
         console.log(error.response.data.error);
    }
  }
}