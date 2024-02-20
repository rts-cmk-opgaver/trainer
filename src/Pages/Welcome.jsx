import React from "react";

const Welcome = () => {
  return (
    <section className="relative h-screen flex flex-col">
      <img
        src="src/assets/Welcometop.jpg"
        alt="Welcome background"
        className="object-cover h-screen absolute"
      />
      <div className="z-10 p-8 pt-60">
        <h1 className="text-[56px] font-bold text-yellow-400">
          Believe Yourself
        </h1>
        <p className="text-xl font-bold text-white mt-4"> -Train like a pro</p>
      </div>
      <div className="z-10 bottom-0 mt-auto ">
        <img src="src/assets/Welcomebottom.jpg" alt="Center" className="" />
        <div className="absolute bottom-0 w-full flex justify-center pb-8">
          <a
            href="/home"
            className="bg-yellow-300 w-[176px] h-[50px] rounded-full flex justify-center items-center font-semibold tracking-wider text-sm shadow-lg"
          >
            START TRAINING
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
