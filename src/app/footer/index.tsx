'use client';
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-9 pr-14 overflow-hidden">
      <motion.div
        className="container mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >
        {/* 1st Column: Services */}
        <nav aria-labelledby="footer-services" className="">
          <h1 id="footer-services" className="font-bold mb-5 text-2xl">
            SERVICES
          </h1>
          <ul className="space-y-2 text-grey">
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Custom Software Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Blockchain Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                AI & ML
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                ERP Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Website Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                CRM Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Game Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Devops
              </a>
            </li>
          </ul>
        </nav>
        {/* 2nd Column: Technologies */}
        <nav aria-labelledby="footer-technologies" className="">
          <h4 id="footer-technologies" className="font-bold mb-5 text-2xl">
            TECHNOLOGIES
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                React
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Angular
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Spring
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Django
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Rails
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Asp.net
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Flutter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                React native
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Android
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                iOS/Swift
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Tensorflow
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Pytorch
              </a>
            </li>
          </ul>
        </nav>
        {/* 3rd Column: Industries */}
        <nav aria-labelledby="footer-industries" className="">
          <h4 id="footer-industries" className="font-bold mb-5 text-2xl">
            INDUSTRIES
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Finance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Insurance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Education
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Energy & Utilities
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Healthcare
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Media & Entertainment
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Oil & Gas, Mining
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Retail & E-commerce
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Logistics & Distribution
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Travel & Hospitality
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Public sector
              </a>
            </li>
          </ul>
        </nav>
        {/* 4th Column: Software Outsourcing */}
        <nav aria-labelledby="footer-outsourcing" className="">
          <h4 id="footer-outsourcing" className="font-bold mb-5 text-2xl">
            SOFTWARE OUTSOURCING
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Why India?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Offshore Outsourcing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Offshore Software Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Software Development India
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Outsourcing to India
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Software Outsourcing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline whitespace-nowrap">
                Issues while Offshore Outsourcing
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
      <motion.div
        className="bg-gray-800 text-white p-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row justify-between">
          <div className=" mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">
              <strong>Phone No:</strong> 6369655499
            </p>
            <p className="mb-2">
              <strong>Email:</strong> lrtechnosphere@gmail.com
            </p>
            <p>
              <strong>Office Address:</strong> 3-157/B, Rekurthy-Sathavahana
              university road, Karimnagar, Telangana, India.
            </p>
          </div>
          <div className="flex flex-col items-center justify-evenly mx-auto">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <a
                href="https://www.instagram.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white h-6 w-6 hover:text-gray-400 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white h-6 w-6 hover:text-gray-400 transition duration-300" />
              </a>
              <a
                href="https://twitter.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white h-6 w-6 hover:text-gray-400 transition duration-300" />
              </a>
            </div>
            <div>DMCA BADGE</div>
          </div>
        </div>
        <div className="bg-gray-800 text-green-600 text-center pt-4 mt-8">
          <p>
            Copyright &copy; 2024, LR Technosphere. All
            rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
