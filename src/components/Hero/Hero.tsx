import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        alt="Students learning"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          Improve your skills on your own<br />
          To prepare for a better future
        </h1>
        <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;