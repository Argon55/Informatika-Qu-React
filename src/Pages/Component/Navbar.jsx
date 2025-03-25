import React from "react";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between items-center py-[0.5rem] px-[7%] bg-white fixed top-0 left-0 right-0 z-[9999] backdrop-blur-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                data-bs-toggle="modal"
                data-bs-target="#modalTampiluniversitas"
              >
                Alternatif PTS
              </a>
            </li>
            <li>
              <a href="https://pmb.almaata.ac.id/">Info PMB</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Informatika-Qu</a>
      </div>
      <div className="navbar-center hidden lg:flex ml-96">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#hero" className="active">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              data-bs-toggle="modal"
              data-bs-target="#modalTampiluniversitas"
            >
              Alternatif PTS
            </a>
          </li>
          <li>
            <a href="https://pmb.almaata.ac.id/">Info PMB</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-outline btn-primary rounded-full hidden sm:inline-flex"
          data-bs-toggle="modal"
          data-bs-target="#loginadmin"
          href="#"
        >
          Login Admin
        </a>
      </div>
    </div>
  );
}
