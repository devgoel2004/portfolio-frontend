import "./app.css";
import "./styleswitcher.css";
import NavigationBar from "./components/Navigation/NavigationBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";

export function App() {
  return (
    <div className="dark">
      <div className="main-container">
        <NavigationBar />
      </div>
      <div className="main-content">
        <Home></Home>
        <About />
        <Services />
        <Projects />
        <Contact />
        <Testimonials />
      </div>
    </div>
  );
}
