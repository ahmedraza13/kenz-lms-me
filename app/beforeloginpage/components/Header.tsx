import logo from "../../../public/images/logo-white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../main.css";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="left-side-logo">
          <img src={logo.src} alt="kenz-logo" width={85} />
        </div>
        <div className="right-side-icons d-flex gap-5">
          {/* Globe Icon */}
          <i className="bi bi-globe2" style={{ color: 'white', fontSize: '1.5rem' }}></i>

          {/* Profile Icon with Dropdown */}
          <div className="dropdown">
            <i
              className="bi bi-person-lines-fill dropdown-toggle"
              style={{ color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul className="dropdown-menu custom-dropdown dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              <li className="dropdown-header">
                <span>Welcome to Kenz Academy</span>
              </li>
              <li>
                <Link className="dropdown-item" href="/home">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
