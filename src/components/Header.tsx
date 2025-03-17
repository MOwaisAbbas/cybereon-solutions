"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxCaretDown, RxCross1, RxHamburgerMenu } from "react-icons/rx";

type NavItem = {
  name: string;
  path: string;
  children: {
    name: string;
    path: string;
  }[];
};

const navItems: NavItem[] = [
  {
    name: "Home",
    path: "/",
    children: []
  },
  {
    name: "About Us",
    path: "/about-us",
    children: []
  },
  {
    name: "Services",
    path: "#",
    children: [
      {
        name: "Cybersecurity Strategy & Advisory",
        path: "/service/cybersecurity-strategy"
      },
      {
        name: "Cybersecurity Assurance & Testing",
        path: "/service/cybersecurity-assurance"
      },
      {
        name: "Business Continuity & Resilience",
        path: "/service/business-continuity"
      },
      {
        name: "Data Protection and Compliance",
        path: "/service/data-protection"
      },
      {
        name: "Security Awareness & Culture",
        path: "/service/security-awareness"
      },
      {
        name: "Virtual CISO & Security Resourcing",
        path: "/service/virtual-ciso"
      }
    ]
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    children: []
  }
];


const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setIsNavOpen(!isNavOpen);
    setOpenDropdown(null);
  };

  const isActive = (item: NavItem) => {
    return pathname === item.path || item.children.some(child => pathname === child.path);
  };

  const toggleDropdown = (itemPath: string) => {
    setOpenDropdown(openDropdown === itemPath ? null : itemPath);
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
        {navItems.map((navItem) => (
          <div
            key={navItem.path}
            className="nav-item-container"
            onMouseEnter={() => navItem.children.length > 0 && setOpenDropdown(navItem.path)}
            onMouseLeave={() => navItem.children.length > 0 && setOpenDropdown(null)}
          >
            <div
              className="nav-parent"
              onClick={() => navItem.children.length > 0 && toggleDropdown(navItem.path)}
            >
              {navItem.children.length > 0 ?
                <span className={`${isActive(navItem) ? "active" : ""}`}>
                  {navItem.name}
                </span> :
                <Link
                  href={navItem.path}
                  onClick={handleDrawerToggle}
                  className={`${isActive(navItem) ? "active" : ""}`}
                >
                  {navItem.name}
                </Link>
              }
              {navItem.children.length > 0 && <RxCaretDown size={25} className={`caret ${openDropdown ? 'rotate-180' : ''}`} />}
            </div>

            {navItem.children.length > 0 && (
              <div className={`dropdown ${openDropdown === navItem.path ? "open" : ""}`}>
                {navItem.children.map((child) => (
                  <Link
                    key={child.path}
                    href={child.path}
                    onClick={handleDrawerToggle}
                    className={pathname === child.path ? "active" : ""}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
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