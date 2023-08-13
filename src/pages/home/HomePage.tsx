import { useEffect, useState } from "react";
import { CodeSlash, FileText, People, PeopleFill, Tools } from "react-bootstrap-icons";

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
    <div className="h-full overflow-auto overflow-x-clip w-[100vw]" id="scrollable">
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
      <h1 className="text-center pt-16">About</h1>
      <div className="w-full center text-center">
        <p className="text-center w-1/2 mb-8 mt-2">Verge Robotics has four sections to the team. Each section handles a different responsibility of the team, and we collaborate with eachother to bring ideas to reality.</p>
      </div>
      <div className="center space-x-4 p-4">
        <div className="w-72 h-96 bg-secondary/50 rounded border-2 border-secondary center flex-col text-center p-4">
          <div className="text-secondary-light bg-secondary/50 border-2 border-secondary w-fit p-4 rounded-full">
            <Tools size={50}/>
          </div>
          <h2 className="text-2xl mt-2 text-text-light font-bold">Build</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc neque, condimentum eget nisi in, auctor sagittis orci. Pellentesque tincidunt massa vitae consequat accumsan.</p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-72 h-96 bg-secondary/50 rounded border-2 border-secondary center flex-col text-center p-4">
            <div className="text-secondary-light bg-secondary/50 border-2 border-secondary w-fit p-4 rounded-full">
              <CodeSlash size={50}/>
            </div>
            <h2 className="text-2xl mt-2 text-text-light font-bold">Programming</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc neque, condimentum eget nisi in, auctor sagittis orci. Pellentesque tincidunt massa vitae consequat accumsan.</p>
          </div>
          <div className="w-72 h-96 bg-secondary/50 rounded border-2 border-secondary center flex-col text-center p-4">
            <div className="text-secondary-light bg-secondary/50 border-2 border-secondary w-fit p-4 rounded-full">
              <People size={50}/>
            </div>
            <h2 className="text-2xl mt-2 text-text-light font-bold">Outreach</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc neque, condimentum eget nisi in, auctor sagittis orci. Pellentesque tincidunt massa vitae consequat accumsan.</p>
          </div>
        </div>
        <div className="w-72 h-96 bg-secondary/50 rounded border-2 border-secondary center flex-col text-center p-4">
          <div className="text-secondary-light bg-secondary/50 border-2 border-secondary w-fit p-4 rounded-full">
            <FileText size={50}/>
          </div>
          <h2 className="text-2xl mt-2 text-text-light font-bold">Documentation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc neque, condimentum eget nisi in, auctor sagittis orci. Pellentesque tincidunt massa vitae consequat accumsan.</p>
        </div>
      </div>
      <div className="h-screen"/>
      <div className="h-screen"/>
    </div>
  )
}