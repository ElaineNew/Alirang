export const TopMenu = () => {
  return(
    <div>
          {/* Topmenu */}
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href={"#1"}>Category</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href={"#1"}>Appitizer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"#1"}>Main Dish</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"#1"}>Hot Pot</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"#1"}>Drinks</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  )
}