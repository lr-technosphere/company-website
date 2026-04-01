"use client";
import React from "react";
import ServiceLayout from "./servicelayout";
import ServiceContent from "@/components/ServiceContent";
import servicesData from "@/data/services.json";

interface PageProps {
  params: { slug: string };
}

const getServiceData = (slug: string | undefined) => {
  return servicesData.services.find((service) => service.slug === slug);
};

const ServicePage = ({ params }: PageProps) => {
  const { slug } = params;

  // Find the service data based on the slug
  const serviceData = getServiceData(slug);

  // If no service data is found, render a fallback or error message
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <ServiceLayout>
      <ServiceContent
        name={serviceData.name}
        description={serviceData.description}
        content={serviceData.content}
      />
    </ServiceLayout>
  );
};

export default ServicePage;
