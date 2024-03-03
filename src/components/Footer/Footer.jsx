import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-secondary border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-14 w-14 rounded-2xl"
                  />
                </Link>
              </div>
              <div>
                <p className="text-sm text-primary">
                  &copy; Copyright 2023. All Rights Reserved Thrishik.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <a href="https://github.com/ThrishikShetty" target="_blank">
                <FaGithub className="h-14 w-14" />
              </a>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <a
                href="https://www.linkedin.com/in/thrishik-shetty-688813253/"
                target="_blank"
              >
                <FaLinkedin className="h-14 w-14" />
              </a>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <a
                href="https://www.instagram.com/_.thrishik_17._/"
                target="_blank"
              >
                <FaInstagramSquare className="h-14 w-14" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
