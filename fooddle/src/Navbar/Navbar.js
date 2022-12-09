import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div
      className="
      navbar bg-[transparent] relative w-[100%]
    "
    >
      <div className="w-[100%] md:flex hidden md:justify-between">
        <div>
          <a
            href="/"
            className="btn btn-ghost normal-case text-4xl text-black"
          >
            FOODLE
          </a>
        </div>

        <div>
          <a
            href="/"
            className="btn btn-ghost normal-case text-xl text-yellow-300 bg-[#37392e]"
          >
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>

      <div className="navbar md:hidden justify-between">
      <div>
          <a
            href="/"
            className="btn btn-ghost normal-case text-4xl text-black"
          >
            FOODDLE
          </a>
        </div>
        <div className="dropdown z-10">
          <label
            tabIndex={0}
            className="btn btn-ghost normal-case text-3xl  text-yellow-300 bg-[#37392e] md:text-4xl md:hidden md:navbar-end"
          >
            <FontAwesomeIcon icon={faBars} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content right-2 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home Page</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;