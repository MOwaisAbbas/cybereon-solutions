"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact-Us",
    path: "/contact-us",
  },
];

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <Image
        src="/logo.webp"
        alt="Cybereon Solutions"
        width={100}
        height={70}
      />
      <nav className={`md:flex ${isNavOpen ? "open" : ""}`}>
        {navItems.map((navItem, index) => (
          <Link key={index} onClick={handleDrawerToggle} href={navItem.path}>
            {navItem.name}
          </Link>
        ))}
        <button onClick={handleDrawerToggle} className="block md:hidden">
          <RxCross1 size={25} />
        </button>
      </nav>
      {!isNavOpen && (
        <button onClick={handleDrawerToggle} className="block md:hidden">
          <RxHamburgerMenu size={25} />
        </button>
      )}
    </header>
  );
};

export default Header;