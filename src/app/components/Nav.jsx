import React from "react";
import Image from "next/image";

function Nav() {
  return (
    <div className="w-full bg-base-100 h-[20vh]">
      <div className="navbar bg-base-100 flex justify-between items-center pt-8 mx-auto md:max-w-[1140px]">
        <div className="navbar-start max-w-[180px]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="dark:text-white">
                <a>Services</a>
              </li>
              <li>
                <a href="/products">Products</a>
                <ul className="dark:text-white p-2">
                  <li>
                    <a>Dog Supplies</a>
                  </li>
                  <li>
                    <a>Cat Supplies</a>
                  </li>
                </ul>
              </li>
              <li className="dark:text-foreground">
                <a className="dark:text-foreground">About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            <Image
              src="https://th.bing.com/th/id/OIG3.mLU0f8ofcpeKRQ1E6QlV?w=270&h=270&c=6&r=0&o=5&dpr=1.4&pid=ImgGn"
              alt="Logo"
              width={80}
              height={80}
              className="pt-2"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex max-w-[400px] md:pt-2">
          <ul className="menu menu-horizontal px-1">
            <li className="dark:text-white">
              <a className="dark:text-white">Services</a>
            </li>
            <li>
              <details>
                <summary className="dark:text-white">Pet Supplies</summary>
                <ul className="">
                  <li>
                    <a>Dog Food</a>
                  </li>
                  <li>
                    <a>Cat Toys</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="dark:text-foreground">
              <a className="dark:text-foreground">About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end max-w-[400px] md:pt-2">
          <input
            type="text"
            placeholder="Search"
            className="input w-44 md:w-auto mr-4 rounded-lg"
          />
          <div className="dropdown dropdown-end">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
