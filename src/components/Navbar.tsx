import { useNavigate } from "react-router-dom"

export default function Navbar(){
  const navigate = useNavigate();

  return(
    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background z-30 text-xl text-text-light center font-quicksand">
      <div className="justify-evenly flex w-2/3">
        <button className="navbar-element" onClick={() => navigate('/home')}>Home</button>
        <button className="navbar-element" onClick={() => navigate('/about')}>About</button>
        <button className="navbar-element" onClick={() => navigate('/chassis')}>Chassis</button>
        <button className="navbar-element" onClick={() => navigate('/donate')}>Donate</button>
        <button className="navbar-element" onClick={() => navigate('/contact')}>Contact</button>
        <button className="navbar-element" onClick={() => navigate('/season')}>Season</button>
      </div>
    </div>
  )
}