export default function HomePage(){
  return(
    <div className="p-4 h-full overflow-visible">
      <div className="w-full h-full center flex-col overflow-clip relative">
        <img src="/VectorV.svg" className="absolute z-10"/>
        <img src="/Chassis.png" className="absolute z-0 opacity-10" />
        <div className="z-10 text-text font-geo tracking-[1vw] text-[2.3vw]">
          <h2 className="w-full">FTC Team</h2>
          <h1 className="text-[15vw] text-white font-anton tracking-[10vw] w-[77.2vw] h-[15vw] flex items-center">23250</h1>
          <h2 className="w-full flex justify-end">Verge Robotics</h2>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  )
}