import React from "react";
import MyPhoto from "../../images/me.jpg";
export default function Header() {
  return (
    <>
      {/* <div className="mt-8 bg-red-500 h-[20rem] w-full max-w-6xl flex flex-col justify-center items-center rounded-lg bg-gradient-to-br from-[#4affde] via-[#5b9dff] to-[#ff34d2] bg-[length:200%_200%] animate-movingGradient mx-auto px-4 sm:px-8 shadow-2xl shadow-black/50">
        <h1 className="m-4 font-custom text-white text-4xl sm:text-5xl md:text-6xl text-center">
          Ldrekoh Coders (PortFolio)
        </h1>
        <p className="m-2 font-custom text-white text-xl sm:text-2xl md:text-3xl text-center">
          Hey, je suis développeur Fullstack, spécialisé principalement en MERN
          (JS/TS) et TailwindCSS.
        </p>
      </div> */}
      <div className="container flex items-center m-12 py-10 bg-white rounded-2xl shadow-2xl max-w-2xl mx-auto">
        {/* Image Section */}
        <img
          src={MyPhoto}
          alt="Profile"
          className="w-40 h-40 rounded-full mr-8 object-cover" // Larger Circular Image
        />

        {/* Text Section */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Herbomel Logan</h2>
          <p className="text-lg text-gray-700 mt-2">
            Hello, I am a Fullstack Developer specializing in MERN (JS/TS) and
            TailwindCSS. I enjoy building modern, responsive web applications.
          </p>
        </div>
      </div>
    </>
  );
}
