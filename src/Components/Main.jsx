import { useEffect } from "react"
import {useGlobalContext} from "../Context/GlobalContext"


const Main = () =>{

  const { movies, fetchMovie } = useGlobalContext()

  useEffect(()=>{
    fetchMovie()
  }, [])

  return(
    <main>      
      {movies.map((movie)=> (<ul key={movie.id}>
        <li>
          <span>{movie.id}</span>
          <span>{movie.title}</span>
        </li>
      </ul>))}
    </main>
  )
}

export default Main