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

function App() {
  return (
    <div className="App">
      <Navbar />
      <WIP />
      {/*
      <Hero />
      <hr className="horizontalDivider" />
      {" "}
      <UniProject />
      <hr className="horizontalDivider" />
      <TeamworkEvidence />
      <hr className="horizontalDivider" />
      <IndustryEngagement />
      */}
      <Footer />
    </div>
  );
}

export default App;
