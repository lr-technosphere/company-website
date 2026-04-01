'use client';
import React from "react";
import bannerWeb from "../../../public/home-banner.jpg";
import bannerMob from "../../../public/home-banner-mob.jpg";
import Image from "next/image";
import AnimatedComponent from "@/components/Animations";
import { useMediaQuery } from 'react-responsive';

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); 

  return (
    <div className="max-w-full overflow-hidden relative">
      <Image
        src={isMobile ? bannerMob : bannerWeb} 
        className="w-full h-[50vh] sm:h-auto"
        alt="Banner image of the Bainevo website"
      />
      <div className=" absolute top-36 flex-col justify-center text-center lg:top-32 lg:left-12 text-white ml-4">
        <AnimatedComponent>
          <p className=" text-xl text-center md:text-left text-white lg:text-4xl mb-5">
            SCULPT YOUR THOUGHTS{" "}
            <span className="block mt-3 mb-1">TO REALITY</span>
          </p>
        </AnimatedComponent>

        <AnimatedComponent>
          <p className=" text-sm text-left md:text-base lg:text-xl">
            LR technosphere excels in solving complex software  {" "}
            <span className="block">
            development challenges using thought process and technology solutions.
            </span>
          </p>
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default Banner;