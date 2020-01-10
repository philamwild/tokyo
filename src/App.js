import React from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Footer from "./components/Footer";
import ArticleList from "./components/ArtcileList";
import { Switch, Route } from "react-router-dom";
import Activities from "./pages/Activities";
import EatAndDrink from "./pages/EatAndDrink";
import Wtf from "./pages/Wtf";

function App() {
  return (
    <div class="App" className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route path="/activities" component={Activities} />
        <Route path="/eatanddrink" component={EatAndDrink} />
        <Route path="/wtf" component={Wtf} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
