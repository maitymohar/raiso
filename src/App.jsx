
import Hero from "./components/Hero.jsx";
import About from './components/About.jsx';
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Clubs from "./pages/Clubs.jsx";
import Nitrutsav from "./pages/Nitrutsav.jsx";
import Sac from "./pages/Sac.jsx";
import Electoral from "./pages/electoral.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden ">
            <BrowserRouter>
              <Routes>
                <Route index element={<Home/>}/>
                <Route path="/clubs" element={<Clubs/>}/>
                <Route path="/nitrutsav" element={<Nitrutsav/>}/>
                <Route path="/sac" element={<Sac/>}/>
                <Route path="/elected" element={<Electoral/>} />
              </Routes>
            </BrowserRouter>
           
        </main>
    )
}
export default App
