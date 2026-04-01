'use client';
import React, { FC } from "react";

interface ServiceContentProps {
  name: string;
  description: string;
  content: string;
}

const ServiceContent = ({ name, description, content } : ServiceContentProps) : React.JSX.Element => {
  return (
    <div className="">
      <h1>{name}</h1>
      <p>{description}</p>
      <div>{content}</div>
    </div>
  );
};

export default ServiceContent;
