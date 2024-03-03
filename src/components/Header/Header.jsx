import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";
import { FaBars, FaXmark } from "react-icons/fa6";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  const navItems1 = [
    {
      name: "",
      slug: "/",
      active: true,
    },
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <>
      <nav className="bg-white sticky top-0 z-10 mt-5  md:px-14 p-4 max-w-screen-2x1 mx-auto  text-primary ">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <Link
              to="/"
              className="text-2x1 font-semibold flex items-center space-x-3[ text-primary]"
            >
              <img
                src={logo}
                alt=""
                className="w-11 inline-block items-center rounded-xl"
              />{" "}
              <span className="ml-2">Tech Beyond Pixel</span>
            </Link>
          </div>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-secondary rounded-2xl "
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={` space-x-4 px-4 pt-10 pb-10 bg-secondary  ${
          isMenuOpen
            ? "block fixed z-10 top-25 right-0 left-0 text-xl"
            : " hidden"
        }`}
      >
        {navItems1.map((item) =>
          item.active ? (
            <li key={item.name} className="list-none flex justify-center m-0">
              <button
                onClick={() => navigate(item.slug)}
                className="block hover:text-gray-300 "
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li className="list-none flex justify-center m-0">
            <LogoutBtn />
          </li>
        )}
      </div>
    </>
  );
}

export default Header;
