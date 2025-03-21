import { Links, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";


const Navbar = () => {

  const navLinks = (
    <>
      <li><NavLink className={({isActive}) => isActive ? "underline font-bold":"no-underline"} to="/">Home</NavLink></li>
      <li><NavLink to="/statistics">Statistics</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
  );


    return (
        <div className="navbar bg-[#9538E2] shadow-sm mt-3 rounded-tl-xl rounded-tr-lg">
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
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Fish Nest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="p-3 bg-white rounded-full text-black"><CiShoppingCart /></a>
          <a className="p-3 ml-2 bg-white rounded-full text-black"><GiSelfLove/></a>
        </div>
      </div>
    );
};

export default Navbar;