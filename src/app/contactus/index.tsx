"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimatedComponent from "@/components/Animations";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      number,
      company,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        console.log("Form submitted successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumber("");
        setCompany("");
        setMessage("");
      } else {
        console.log("Failed to submit the form");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  const formFields = [
    {
      label: "First Name*",
      id: "firstName",
      type: "text",
      value: firstName,
      onChange: setFirstName,
    },
    {
      label: "Last Name*",
      id: "lastName",
      type: "text",
      value: lastName,
      onChange: setLastName,
    },
    {
      label: "Email",
      id: "email",
      type: "email",
      value: email,
      onChange: setEmail,
    },
    {
      label: "Number",
      id: "number",
      type: "text",
      value: number,
      onChange: setNumber,
    },
    {
      label: "Company",
      id: "company",
      type: "text",
      value: company,
      onChange: setCompany,
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Open Sans",
      }}
      className=""
    >
      <motion.div
        className=" bg-green-800 min-h-screen flex items-center justify-center pt-14"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row w-full max-w-6xl p-4">
          <div
            className="bg-white p-8 rounded-lg lg:mr-14 mb-8 lg:mb-0"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[40px] font-semibold mb-4">CONTACT US</h1>
              <form onSubmit={handleSubmit} className="w-full">
                {formFields.map((field) => (
                  <div key={field.id} className="mb-4">
                    <input
                      type={field.type}
                      id={field.id}
                      value={field.value}
                      placeholder={field.label}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>
                ))}
                <textarea
                  rows={4}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={message}
                  placeholder="Tell us about your project"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex items-center my-4">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-gray-700 text-[12px]">
                    I agree to the terms and conditions
                  </label>
                </div>
                <div className="text-gray-400 text-[12px] mb-4">
                  By sending this form I confirm that I have read and accept
                  LR technosphere privacy policy
                </div>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
          <div className="relative flex-grow h-fit">
            <motion.div
              className="pl-12"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="text-[24px] text-white mb-6">WHAT&apos;S NEXT?</h1>
              <div className="absolute left-[70px] top-8 w-1 bg-white h-[80%]" />
              <div className="mb-2">
                <p className="text-[20px] text-white flex items-center mb-4">
                  <span className="bg-white w-12 h-12 rounded-lg inline-block mr-4 flex-shrink-0"></span>
                  We will send a short email notifying you that we successfully
                  received your request and started working on it.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[20px] text-white flex items-center mb-4">
                  <span className="bg-white w-12 h-12 rounded-lg inline-block mr-4 flex-shrink-0"></span>
                  Our solution advisor analyzes your requirements and will reach
                  back to you within 3 business days.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[20px] text-white flex items-center mb-4">
                  <span className="bg-white w-12 h-12 rounded-lg inline-block mr-4 flex-shrink-0"></span>
                  We may sign an optional mutual NDA within 1-2 business days to
                  make sure you get the highest confidentiality level.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-[20px] text-white flex items-center mb-4">
                  <span className="bg-white w-12 h-12 rounded-lg inline-block mr-4 flex-shrink-0"></span>
                  Our business development manager presents you an initial
                  project estimation, ballpark figures, or our project
                  recommendations within approximately 3-5 days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
