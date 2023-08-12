import { useEffect, useState } from "react";

export default function HomePage(){
  const [scrollPercent, setScrollPercent] = useState(0);
  
  useEffect(() => {
    const element = document.getElementById('scrollable');
    if(!element) return;
    element.onscroll = () => {
      const percent = element.scrollTop / window.innerHeight;
      setScrollPercent(percent);
    }

    return () => {
      element.onscroll = null;
    };
  }, []);

  return(
    <div className="h-full overflow-y-scroll overflow-x-clip w-[100vw]" id="scrollable">
      <img src="/Chassis.png" className="absolute -z-20 w-[100vw] object-cover " style={{opacity: scrollPercent + 0.2}} alt="Verge Robotics Chassis"/>
      <div className="relative center flex-col h-full">
        <img className="absolute -z-10" src="/VectorV.svg" alt="Verge Logo"/>

        <h1 data-value='23250' className="font-anton h-[18vw] overflow-clip center text-[15vw] transition-all duration-300 w-[100vw] select-none
        bg-gradient-to-r from-secondary-dark via-secondary-light  to-primary text-transparent bg-clip-text bg-300% animate-numbers"
        >
          23250
        </h1>

        <h2 className="text-[3vw] font-quicksand flex tracking-[2vw] -mr-[2vw] select-none">
          Verge Robotics
        </h2>
      </div>
      <div className="h-screen flex items-end p-8">
        <div>
          <h1 className="font-bold text-2xl text-text-light mb-1">Chassis</h1>
          <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pulvinar urna, at fringilla mi pretium a. Nulla sed arcu eu justo sodales molestie eget ut libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque id purus vitae ex consequat sollicitudin eget eu sapien.</p>
        </div>
      </div>
      <div className="h-screen"/>
      <div className="h-screen"/>
      <div className="h-screen"/>
    </div>
  )
}