import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";

const CustomLink = ({ id, title, className = "", handleClick = () => null }) => {
  const scrollUp = (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    handleClick();
  };

  return (
    <button
    onClick={(e) => scrollUp(e)}
      href={`/#${id}`}
      className={`${className}  rounded relative group font-medium
      `}
    >
      {title}
    </button>
  );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-24 py-4
     z-10 bg-dark/75 border-b border-solid border-primary/50 backdrop-blur-sm md:px-12">
      <Logo />
      <nav className="flex items-center justify-center md:hidden">
        <CustomLink id="home" title="Home" className="mr-3" />
        <CustomLink id="about" title="About" className="mx-3" />

        <CustomLink id="vision" title="Vision" className="mx-3" />
        <CustomLink id="roadmap" title="Roadmap" className="mx-3" />
        {/* <CustomLink id="contact" title="Contact Us" className="mx-3" /> */}
        <Link href="https://gamma.io/ordinals/collections/the-odessey-of-the-unknownmen?tab=market"
        target="_blank"
         className="ml-3  text-primary px-3 py-2 rounded-md font-bold
         transition-all ease duration-200
         border border-solid border-primary
         hover:bg-primary hover:text-dark
         ">
          Mint Now
        </Link>
      </nav>

      <button
        type="button"
        className=" flex-col items-center justify-center hidden md:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span className={`bg-primary block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-primary block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'} my-0.5`}></span>
        <span className={`bg-primary block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {
        isOpen ?
        <nav className="hidden items-center justify-center md:flex
      flex-col absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 self-center
       bg-dark/95 w-[80vw] p-16 rounded-lg border border-solid border-primary/50
      ">
        <CustomLink id="home" title="Home" className="mb-3"  handleClick={handleClick}   />
        <CustomLink id="about" title="About" className="my-3"  handleClick={handleClick}   />

        <CustomLink id="vision" title="Vision" className="my-3"  handleClick={handleClick}   />
        <CustomLink id="roadmap" title="Roadmap" className="my-3"  handleClick={handleClick}   />
        {/* <CustomLink id="contact" title="Contact Us" className="mx-3" /> */}
        <Link href="https://gamma.io/ordinals/collections/the-odessey-of-the-unknownmen?tab=market"
        target="_blank"
         className=" mt-3 text-primary px-3 py-2 rounded-md font-bold
         transition-all ease duration-200
         border border-solid border-primary
         hover:bg-primary hover:text-dark
         ">
          Mint Now
        </Link>
      </nav>
        : null
      }

    </header>
  );
};

export default NavBar;
