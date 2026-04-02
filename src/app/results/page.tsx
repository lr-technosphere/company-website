"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaRegClock,
  FaProjectDiagram,
  FaGlobe,
  FaSmile,
  FaUserTie,
  FaCertificate,
} from "react-icons/fa";

const metrics = [
  { icon: FaRegClock, number: 2, label: "Years of Experience", suffix: "+" },
  { icon: FaProjectDiagram, number: 10, label: "Projects Completed", suffix: "+" },
  { icon: FaGlobe, number: 3, label: "Countries Served", suffix: "+" },
  { icon: FaSmile, number: 100, label: "Client Satisfaction Rate (%)", suffix: "%" },
  { icon: FaUserTie, number: 5, label: "Team Members", suffix: "+" },
  { icon: FaCertificate, number: 4, label: "Industry Certifications", suffix: "+" },
];

const Results: React.FC = () => {
  return (
    <div className="pt-10">
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center py-7"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5}}
      >
        <span className="text-green-600 text-3xl md:text-5xl mr-0 md:mr-3">
          Results that speak
        </span>
        <span className="text-gray-800 text-3xl md:text-5xl mt-2 md:mt-0">
          for themselves
        </span>
      </motion.div>
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <metric.icon className="text-green-600 text-6xl mx-10" />
              <div className="text-left">
                <div className="text-4xl text-gray-800">
                  <CountUp
                    start={0}
                    end={metric.number}
                    duration={8}
                    suffix={metric.suffix ?? "+"}
                  />
                </div>
                <div className="text-gray-800 text-xl">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
