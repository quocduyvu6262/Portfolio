import { BrowserRouter } from "react-router-dom"

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
import { herobg } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(./${herobg})` }}
        >
          <Navbar />
          <Hero />
        </div>
        {/* <About /> */}
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App
