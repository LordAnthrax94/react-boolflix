import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

const MovieProvider = ({children}) => {
  const baseApiUrl = "https://api.themoviedb.org/3/search/movie?api_key=6cf11780013dc8256074e1389fdab41fquery=ritorno+al+futuro"
  

  const [movies, setMovies] = useState([]);

  const fetchMovie = () =>{
    axios.get(baseApiUrl)
    .then((res) =>{
      setMovies(res.data)
    })
  }
  return (
    <GlobalContext.provider value={{movies, setMovies, fetchMovie}}>
      {children}
    </GlobalContext.provider>
  )
}

const useGlobalContext = () =>{
  return useContext(GlobalContext)
}

export {useGlobalContext, MovieProvider}