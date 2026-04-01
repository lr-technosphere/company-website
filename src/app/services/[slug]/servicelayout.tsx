"use client";
import React, { FC, ReactNode } from "react";
import Header2 from "@/components/header2/page";
import Footer from "@/app/footer";

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header2 />
      <section className=" h-[60vh]">{children}</section>
      <Footer />
    </div>
  );
};

export default ServiceLayout;
