'use client';
import React from "react";
import { FaRocket, FaStore, FaBuilding, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 120 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const iconVariants = {
  offscreen: { rotate: -100 },
  onscreen: {
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
};

const WhoWeWorkWith = () => {
  return (
    <motion.div
      className="text-white py-8 px-4 lg:px-8 h-auto flex flex-col justify-center items-center bg-gradient-to-r from-green-600 to-slate-800"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <div className="flex flex-col justify-center mr-6">
            <motion.div
              className="mb-6 text-4xl lg:text-5xl flex justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-slate-800 font-bold mr-2">WHO</span>
              <span className="text-white font-bold">WE WORK WITH</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-base lg:text-xl mb-0 lg:mb-8 text-center lg:text-left">
                At LR technosphere, we specialize in delivering cutting-edge mobile app
                development solutions to a diverse range of clients. From
                dynamic startups to established enterprises, our award-winning
                services cater to over 1000+ businesses worldwide. Our team is
                dedicated to turning visionary ideas into reality, ensuring
                innovative, high-quality, and tailored solutions to meet unique
                business needs.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full auto-rows-fr">
            <motion.div
              className="bg-white text-black p-8 rounded-lg flex flex-col items-center justify-center shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <motion.div variants={iconVariants}>
                <FaRocket className="text-blue-500 text-8xl mb-6" />
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-2xl">Startups</h3>
              </div>
            </motion.div>
            <motion.div
              className="bg-white text-black p-8 rounded-lg flex flex-col items-center justify-center shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <motion.div variants={iconVariants}>
                <FaStore className="text-green-500 text-8xl mb-6" />
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-2xl">
                  Small & Medium Businesses
                </h3>
              </div>
            </motion.div>
            <motion.div
              className="bg-white text-black p-8 rounded-lg flex flex-col items-center justify-center shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <motion.div variants={iconVariants}>
                <FaUsers className="text-orange-500 text-8xl mb-6" />
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-2xl">Agencies</h3>
              </div>
            </motion.div>
            <motion.div
              className="bg-white text-black p-8 rounded-lg flex flex-col items-center justify-center shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <motion.div variants={iconVariants}>
                <FaBuilding className="text-pink-500 text-8xl mb-6" />
              </motion.div>
              <div className="text-center">
                <h3 className="font-bold text-2xl">Enterprises</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhoWeWorkWith;
