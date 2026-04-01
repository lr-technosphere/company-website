"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/BAiNevo.png";
import Link from "next/link";

type NavItem = {
  name: string;
  dropdownContent: string[] | null;
};

const navItems: NavItem[] = [
  {
    name: "SERVICES",
    dropdownContent: [
      "CUSTOM SOFTWARE DEVELOPMENT",
      "MOBILE APP DEVELOPMENT",
      "UI/UX DESIGN",
      "BLOCKCHAIN DEVELOPMENT",
      "AI & ML",
      "ERP SOLUTIONS",
      "WEBSITE DEVELOPMENT",
      "CRM SOLUTIONS",
      "GAME DEVELOPMENT",
      "DEVOPS",
    ],
  },
  {
    name: "TECHNOLOGIES",
    dropdownContent: [
      "REACT",
      "ANGULAR",
      "SPRING",
      "DJANGO",
      "RAILS",
      "ASP.NET",
      "FLUTTER",
      "REACT NATIVE",
      "ANDROID",
      "iOS/Swift",
      "Tensorflow",
      "Pytorch",
      "Flutter",
      "Keras",
      "Python",
      "Java",
      "Go",
    ],
  },
  {
    name: "INDUSTRIES",
    dropdownContent: [
      "FINANCE",
      "INSURANCE",
      "EDUCATION",
      "ENERGY AND UTILITIES",
      "HEALTHCARE",
      "MEDIA & ENTERTAINMENT",
      "OIL & GAS, MINING",
      "RETAIL & ECOMMERCE",
      "LOGISTICS & DISTRIBUTION",
      "TRAVEL & HOSPITALITY",
      "PUBLIC SECTOR",
    ],
  },
  { name: "PORTFOLIO", dropdownContent: null },
  { name: "INSIGHTS", dropdownContent: null },
  { name: "ABOUT", dropdownContent: ["About Us", "Our Team", "Our Story"] },
];

const Header2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="header" className={`w-full z-50 px-4 bg-slate-800`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            {/* <Image
              src={logo}
              alt="Bainevo image"
              className="h-10 w-56 cursor-pointer"
            /> */}
            <div className="flex items-center">
              <div className={`flex flex-col items-center p-1 border-dashed bg-green-600`}>
                <h1 className="text-white text-2xl font-bold font-serif">
                  LR technosphere
                </h1>
                <p className={` text-xs italic text-slate-800`}>
                  Defining Tomorrow
                </p>
              </div>
            </div>
          </Link>
        </div>
        <nav className=" flex items-center text-white">
          <div className="hidden lg:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 text-lg ${
                  scrolled ? " py-6" : " py-10"
                }`}
                onMouseEnter={() => setHoveredNavItem(index)}
                onMouseLeave={() => setHoveredNavItem(null)}
                onClick={() =>
                  setHoveredNavItem(hoveredNavItem === index ? null : index)
                }
              >
                <a href="#" className=" hover:text-primary">
                  {item.name}
                </a>
                {item.dropdownContent && hoveredNavItem === index && (
                  <div
                    className="absolute left-0 right-0 top-0 bg-white text-black p-4 rounded-t-lg shadow-lg transition-all duration-300 opacity-100 z-10"
                    style={{
                      transform: `translateY(${scrolled ? "72px" : "104px"})`,
                    }}
                    onMouseEnter={() => setHoveredNavItem(index)}
                    onMouseLeave={() => setHoveredNavItem(null)}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {item.dropdownContent.map((service, i) => (
                        <Link
                          href={`/services/${service
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          key={i}
                          className=""
                        >
                          <li className="px-4 py-2 w-full bg-gray-100 rounded hover:bg-gray-200">
                            {service}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <button className=" bg-green-600 border-white border-4 text-white text-lg px-4 py-3 rounded-2xl hover:bg-green-700 mt-4 animate-bounce ">
              GET IN TOUCH
            </button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed top-0 left-0 w-full h-fit pb-8 bg-slate-800 z-50 flex flex-col items-center pt-24 overflow-y-auto">
            <div className="flex justify-between items-center w-full px-4 mb-8">
              <div className="text-white text-2xl">Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white focus:outline-none"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            <div className="w-full">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group py-2 w-full"
                  onClick={() =>
                    setHoveredNavItem(hoveredNavItem === index ? null : index)
                  }
                >
                  <div className="px-4 py-2 bg-slate-700 text-white rounded-t-lg hover:bg-slate-600">
                    <a href="#" className="text-white text-lg">
                      {item.name}
                    </a>
                  </div>
                  {item.dropdownContent && hoveredNavItem === index && (
                    <div className="w-full bg-slate-700 text-white pb-2 rounded-b-lg shadow-lg">
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 pt-2">
                        {item.dropdownContent.map((content, i) => (
                          <li
                            key={i}
                            className="bg-slate-800 rounded px-2 py-1 hover:bg-gray-700 whitespace-nowrap"
                          >
                            <a href="#">{content}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-8">
              GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header2;
