export default function Navbar(){
  const pages = {
    About: "about",
    Donate: "about",
  }
  return(
    <div className="absolute top-0 left-0 right-0 h-16 bg-background/50 backdrop-blur z-30 text-xl text-text-light center font-quicksand">
      <div className="justify-evenly flex w-2/3">
        <div className="tracking-widest hover:scale-125 transition-all duration-300">About</div>
        <div className="tracking-widest">Chassis</div>
        <div className="tracking-widest">Donate</div>
        <div className="tracking-widest">Contact</div>
        <div className="tracking-widest">Season Updates</div>
      </div>
    </div>
  )
}