import StartBackGround from "../components/startBackGround";
import ThemeToggle from "../components/themeToggle";

import Navbar from "../components/navbar";
const Home = () => {
  return (
    <div className="min-h-screen  bg-background text-foreground overflow-x-hidden">
     {/* Theme Toggle */}
        <ThemeToggle />

     {/* Background effect */}
     <StartBackGround />
     


     {/* Navbar */}
     <Navbar/>

     {/* mian content */}

     {/* Footer */}
    </div>
  )
}

export default Home;
