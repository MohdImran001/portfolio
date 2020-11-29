import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [mobileMenu, showMobileMenu] = useState(false);

  return (
    <header>
      <div className="container-fluid mx-auto">
        <nav className="navbar flex">
          <div className="navbar__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
              <path
                fill="#33323D"
                fill-rule="evenodd"
                d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
              ></path>
            </svg>
          </div>
          <div className="burger-menu ml-auto hidden mt-2">
            <svg
              id="burger-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="13"
              className={mobileMenu ? "hidden" : ""}
              onClick={() => showMobileMenu(true)}
            >
              <g fill="#33323D" fill-rule="evenodd">
                <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z"></path>
              </g>
            </svg>
            <svg
              id="close-icon"
              className={mobileMenu ? "" : "hidden"}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              onClick={() => showMobileMenu(false)}
            >
              <path
                fill="#33323D"
                fill-rule="evenodd"
                d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
              ></path>
            </svg>
          </div>
          <ul className="main__nav ml-auto flex space-x-10">
            <li>
              <NavLink exact to="/" activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact Me
              </NavLink>
            </li>
          </ul>
          {mobileMenu && (
            <ul className="mobile_nav block">
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  onClick={() => showMobileMenu(false)}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  activeClassName="active"
                  onClick={() => showMobileMenu(false)}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  onClick={() => showMobileMenu(false)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
