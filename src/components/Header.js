import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid p-0">
          <a
            className="navbar-brand font-600"
            style={{ fontSize: "26px" }}
            href="#"
          >
            Navbar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100 lg_text font-500">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Hire
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Become a seller
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Connect Business
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <button className="btn text-white font-600" type="submit">
              Search
            </button>
            <button className="btn bg-prim text-white px-3 rounded-1 font-600">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
