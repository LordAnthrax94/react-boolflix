import { useEffect } from "react"
import {useGlobalContext} from "../Context/GlobalContext"


const Main = () =>{

  const { movies, fetchMovie } = useGlobalContext()
  
  useEffect(()=>{
    fetchMovie()
  }, [])

  return(
    <main>
      <div className="container">
        <div className="col-12 col-md-4 m-3 d-flex justify-content-between">          
          {movies.map((movie)=> (<div className="card" key={movie.id}>
            
                <img src="..." className="card-img-top" alt={movies.title} />
                <div className="card-body">
                  <h3 className="card-text">{movies.title}</h3>
                </div>            
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{movies.original_title}</li>
                  <li className="list-group-item">{movies.original_language}</li>
                  <li className="list-group-item">{movies.vote_count}</li>
                </ul>
              
          </div>))}
        </div>
      </div>
    </main>
  )
}

export default Main