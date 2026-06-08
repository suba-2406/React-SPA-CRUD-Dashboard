import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <span className="navbar-brand fw-bold">
          📚 Resource Manager
        </span>

        <div>
          <Link className="btn btn-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-success" to="/add">
            Add Resource
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;