import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import UniProject from "./components/uniProject";
import TeamworkEvidence from "./components/teamworkEvidence";
import IndustryEngagement from "./components/industryEngagement";
import WIP from "./components/WIP";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WIP />
      {/*<Hero />
      <UniProject />
      <TeamworkEvidence />
      <IndustryEngagement />
      */}
    </div>
  );
}

export default App;
