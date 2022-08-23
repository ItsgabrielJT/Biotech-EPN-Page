import React from "react";
import Squence from "../assets/images/sequence.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-accent">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Squence}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-neutral-content">Programación con Python para Biología</h1>
            <p className="py-6 text-neutral-content">
              Proyecto de Biología desarrollada en Python, por parte del Club de Software de la EPN
            </p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
