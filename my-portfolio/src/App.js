import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import UniProject from "./components/uniProject";
import TeamworkEvidence from "./components/teamworkEvidence";
import IndustryEngagement from "./components/industryEngagement";
import Footer from "./components/footer";
import WIP from "./components/WIP";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
    
  );

  
}

export default App;
