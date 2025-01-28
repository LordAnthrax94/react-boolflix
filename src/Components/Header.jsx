const Header = () =>{
  return(
    <header>
      <nav className="navbar navbar-expand-lg text-bg-dark">
        <div className="container-fluid d-flex">
          <a className="navbar-brand text-danger" href="#">BoolFlix</a>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header