const ResultSection = ({title, data}) =>{

  return (
    <div><h1>{title}</h1>
             
          {data.map((movie) => (<div className="col-12 col-md-4 m-3 d-flex justify-content-between flex-wrap" key={movie.id}>
            
            
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-text">{movie.title || movie.name}</h3>
                  </div>            
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{movie.original_title}</li>
                    <li className="list-group-item">{movie.original_language}</li>
                    <li className="list-group-item">{movie.vote_count}</li>
                  </ul>
                </div>
                
              
          </div>))}
        </div>
    
    
  )
}

export default ResultSection