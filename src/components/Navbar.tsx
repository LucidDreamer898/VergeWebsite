export default function Navbar(){
  return(
    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background z-30 text-xl text-text-light center font-quicksand">
      <div className="justify-evenly flex w-2/3">
        <button className="navbar-element">About</button>
        <button className="navbar-element">Chassis</button>
        <button className="navbar-element">Donate</button>
        <button className="navbar-element">Contact</button>
        <button className="navbar-element">Season Updates</button>
      </div>
    </div>
  )
}