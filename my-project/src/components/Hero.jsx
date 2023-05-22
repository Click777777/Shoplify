// import React from "react";
import { Link } from "react-router-dom";
import hero from "../img/woman_hero.png";

const Hero = () => {
  return (
    <section className="h-[800px] bg-bgHero bg-cover bg-center bg-no-repeat py-24">
      <div className="container float-right mx-auto flex h-full items-center justify-around">
        <div className="flex flex-1 flex-col gap-y-4 font-semibold uppercase">
          <div className="flex items-center ">
            <div className="mr-1 h-[2px] w-10 bg-red-500"></div>New Trend
          </div>

          <div className="text-[70px] font-light leading-[1.1]">
            <h1 className="mb-4 ">shoplify</h1>
            <span className="font-normal">with you</span>
          </div>

          <div className="mt-4 self-start border-b-2 border-primary">
            <Link>shop it now</Link>
          </div>
        </div>

        <div className="hidden h-full flex-1 md:block">
          <img src={hero} alt="heroSection Image" className=" h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
