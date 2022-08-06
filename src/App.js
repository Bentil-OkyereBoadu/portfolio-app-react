import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="display: grid grid-flow-row grid-row-5">
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Work />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
