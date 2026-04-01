'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Offerings = () => {
  const cards = [
    {
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      content:
        "Leverage our expertise to create bespoke software solutions tailored to your business needs with cutting-edge technology and best practices.",
      imageUrl:
        "https://www.tatvasoft.com/public/images/custom_software_development_services.svg",
    },
    {
      title: "WEB DEVELOPMENT",
      content:
        "Transform your online presence with our innovative web development services, designed for high performance and seamless user experiences.",
      imageUrl:
        "https://www.tatvasoft.com/public/images/application_development.svg",
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      content:
        "Drive engagement and growth with our robust mobile app development services, delivering scalable and feature-rich applications.",
      imageUrl: "https://www.tatvasoft.com/public/images/mobile_app.svg",
    },
    {
      title: "PRODUCT DEVELOPMENT",
      content:
        "Develop cutting-edge products with our comprehensive product development services, from ideation to deployment, ensuring scalable solutions.",
      imageUrl: "https://www.tatvasoft.com/public/images/cloud_service.svg",
    },
    {
      title: "TALENTED TEAM",
      content:
        "Scale your project with our talented software engineers, ensuring expertise and efficiency to meet your project deadlines.",
      imageUrl:
        "https://www.tatvasoft.com/public/images/development_center.svg",
    },
    {
      title: "TESTING & QA",
      content:
        "Ensure top-notch quality and performance of your applications with our meticulous testing and QA services, detecting and fixing issues promptly.",
      imageUrl: "https://www.tatvasoft.com/public/images/testing-qa.svg",
    },
  ];

  return (
    <div style={{ fontFamily: "Open Sans" }} className="mb-14 p-3 border-t-2">
      <div className="mt-6 flex justify-center leading-[60px] ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[45px]" style={{ color: "#0b2e58" }}>
            Software Development Company
          </h1>
          <span className="text-[45px]" style={{ color: "#0b2e58" }}>
            Serving Start-ups to Fortune 500
          </span>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center mt-2"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[20px] text-[#333333]">
          We offer Software Development & Enterprise Mobile Apps Development
          utilizing technology.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mx-[69.2px]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 p-4 flex flex-col items-center px-[42px] pt-[29px] pb-[50px] hover:bg-green-600 hover:text-white group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={card.imageUrl}
              alt={card.title}
              width={62}
              height={62}
            />
            <h2 className="text-[24px] my-2 text-center text-[#0b2e58] group-hover:text-white">
              {card.title}
            </h2>
            <p className="text-center text-[16px] mt-[5px] text-[#333333] group-hover:text-white">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
