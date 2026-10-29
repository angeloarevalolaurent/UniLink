import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getUserByHandle } from "../api/UniLinkAPI"


export default function HandleView() {

    const params = useParams()
    const handle = params.handle!

    const {data, error, isLoading} = useQuery({
        queryFn: ()=> getUserByHandle(handle),
        queryKey:['handle', handle],
        retry:1
    })

    console.log(data);
    

  return (
    <>
      <div>handle</div>
    </>
  )
}
