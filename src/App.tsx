import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Redirect from "./components/Redirect";
import Navbar from "./components/Navbar";
import OurTeam from "./pages/ourTeam/OurTeam";

export default function App(){
  const path = useLocation().pathname;
  if(path == '/') return <Redirect link="/home"/>

  return(
    <div className="relative h-full" id="app">
      <Navbar/>
      <div className="h-screen overflow-clip">
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/our-team" element={<OurTeam/>}/>
        </Routes>
      </div>
    </div>
  )
}