import React from "react";
import storeImage from "../assets/store.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#024BAB] to-[#002D6E] flex items-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
          <h1 className="font-Teko text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Llantas Y Servicio De Calidad Para Tu Auto
          </h1>

          <p className="font-Montserrat text-base md:text-lg mb-8 text-white opacity-90 max-w-2xl mx-auto lg:mx-0">
            Venta de llantas nuevas Continental, Hankook, Pirelli, Bridgestone,
            Kumho, Goodyear, Firestone, Michelin y más. También contamos con
            llantas usadas y servicio de{" "}
            <span className="font-semibold">vulcanización</span>,{" "}
            <span className="font-semibold">balanceo e instalación</span>.
          </p>

          <h2 className="font-Teko text-2xl md:text-3xl mb-8 text-white">
            Todo lo que tus llantas necesitan, en un solo lugar.
          </h2>

        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={storeImage}
            alt="Tienda de llantas"
            className="rounded-md max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
