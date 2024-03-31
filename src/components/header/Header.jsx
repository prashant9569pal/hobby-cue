// Importing icons and styles
import IconBell from "../icons/IconBell"; // Importing Bell icon component
import IconBookmark from "../icons/IconBookmark"; // Importing Bookmark icon component
import IconCart from "../icons/IconCart"; // Importing Cart icon component
import IconExplore from "../icons/IconExplore"; // Importing Explore icon component
import IconSearch from "../icons/IconSearch"; // Importing Search icon component
import IconHobbies from "../icons/IconHobbies"; // Importing Hobbies icon component
import "./header.style.css"; // Importing header styles

// Header component function
function Header() {
  // Rendering JSX for the Header component
  return (
    <>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid p-0 gap-4 d-flex align-items-center">
          {/* HobbyCue logo */}
          <a className="navbar-brand" href="#">
            <img src="images/HobbyCueLogo.png" alt="" />
          </a>
          {/* Search form */}
          <div className="form-group form-group-md d-none d-lg-block w-100">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="btn" type="button" id="invite">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          {/* Navbar toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar collapse */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar items */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Explore dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownExplore"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconExplore /> Explore
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownExplore"
                >
                  {/* Explore dropdown items */}
                  <li>
                    <a className="dropdown-item" href="#">
                      People - Community
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Places - Venues
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Programs - Events
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Products - Store
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                </ul>
              </li>
              {/* Hobbies dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownHobbies"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconHobbies /> Hobbies
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownHobbies"
                >
                  {/* Hobbies dropdown items */}
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
            {/* Right-aligned navbar items */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Bookmark icon */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <IconBookmark />{" "}
                  <span className="d-inline d-md-none">Hobbies</span>
                </a>
              </li>
              {/* Bell icon */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <IconBell />
                </a>
              </li>
              {/* Cart icon */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <IconCart />
                </a>
              </li>
              {/* Sign button */}
              <li className="nav-item">
                <button className="btn btn-outline-primary">Sign</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// Exporting the Header component as the default export
export default Header;
