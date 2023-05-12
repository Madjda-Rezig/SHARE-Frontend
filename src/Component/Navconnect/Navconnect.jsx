import React from "react";

import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
import Mode from "../Mode/Mode";

const Navconnect = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"}>
            <a className="btn btn-ghost normal-case text-xl">SHARE</a>
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="flex-none gap-2 mr-28">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />

                <button className="btn btn-square mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Mode />
          <div className="dropdown dropdown-end mr-8">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"Profile"}>
                  <a className="justify-between">Profile</a>
                </Link>
              </li>
              <li>
                <a>Parametres</a>
              </li>
              <li>
                <a>Déconnexion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navconnect;
