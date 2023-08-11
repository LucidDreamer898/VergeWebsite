export default function HomePage(){
  return(
    <div className="p-4 h-full">
      <div className="w-full h-full center flex-col overflow-clip relative">
        <img src="/VectorV.svg" className="absolute z-10"/>
        <img src="/Chassis.png" className="fixed z-0 opacity-50 scale-[2.5]"/>
        <div className="z-10 text-text font-quicksand tracking-[1vw] text-[2.3vw]">
          <h2 className="w-full">FTC Team</h2>
          <h1 className="text-[15vw] overflow-clip text-white font-anton tracking-[10vw] w-[77.2vw] h-[15vw] flex items-center">23250</h1>
          <h2 className="w-full flex justify-end">Verge Robotics</h2>
        </div>
      </div>
      <div className="h-[50vh]"></div>
    </div>
  )
}