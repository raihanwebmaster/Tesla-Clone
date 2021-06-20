import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Model3 from "./components/Model3";
import ModelS from "./components/ModelS";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import SolarPanels from "./components/SolarPanels";
import SolarRoof from "./components/SolarRoof";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/model-3">
          <Model3 />
        </Route>
        <Route path="/model-s">
          <ModelS />
        </Route>
        <Route path="/model-x">
          <ModelX />
        </Route>
        <Route path="/model-y">
          <ModelY />
        </Route>
        <Route path="/solarPanels">
          <SolarPanels />
        </Route>
        <Route path="/solarRoof">
          <SolarRoof />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
