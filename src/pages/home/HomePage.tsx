import { useEffect, useState } from "react";
import { clamp } from "../../utils/helpers";

export default function HomePage(){
  const [scrollPercent, setScrollPercent] = useState(0);
  
  useEffect(() => {
    const element = document.getElementById('scrollable');
    if(!element) return;
    element.onscroll = () => {
      const percent = element.scrollTop / (element.scrollHeight - window.innerHeight)
      setScrollPercent(percent);
    }

    return () => {
      element.onscroll = null;
    };
  }, []);

  return(
    <div className="h-full overflow-y-scroll overflow-x-clip w-[100vw]" id="scrollable">
      {/* <div className="absolute -z-20 w-[100vw] h-full center">
        <img src="/Chassis.png" className="w-full object-cover" style={{opacity: ((scrollPercent * 0.5)+0.5), transform: `scale(${((scrollPercent * 0.2)+0.8)})`}} alt="Verge Robotics Chassis"/>
      </div> */}
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
      <div className="center space-x-4 p-4 border-2">
        <div className="bg-yellow-500 h-32 w-full center flex-col">
          <div className="w-72 h-96 bg-"></div>
        </div>
        <div className="bg-red-500 h-32 w-full center flex-col">
          
        </div>
        <div className="bg-blue-500 h-32 w-full center flex-col">
          
        </div>
      </div>
      <div className="h-screen"/>
      <div className="h-screen"/>
    </div>
  )
}