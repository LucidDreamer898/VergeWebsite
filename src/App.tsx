import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Redirect from "./components/Redirect";

export default function App(){
  const path = useLocation().pathname;
  if(path == '/') return <Redirect link="/home"/>

  return(
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
  )
}