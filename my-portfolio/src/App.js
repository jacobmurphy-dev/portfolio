import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Spinner from "react-bootstrap/Spinner";
import SvgBackground from "./components/SVGBackground";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/loadingComp";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulates loading for 3 seconds
      setLoading(false); // Set loading to false after loading is complete
    };

    loadApp();
  }, []);

  if (loading) {
    return <LoadingScreen />; // Show loading screen while loading  <SvgBackground />
  } else {
    return (
      <div className="App">
        <Home />  
      </div>
    );
  }
}

export default App;
