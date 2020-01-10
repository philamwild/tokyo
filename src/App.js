import React from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Footer from "./components/Footer";
import ArticleList from "./components/ArtcileList";
import { Switch, Route } from "react-router-dom";
import Places from "./components/Places";
import Bento from "./components/Bento";
import Game from "./components/Game";

function App() {
  return (
    <div class="App" className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route path="/places" component={Places} />
        <Route path="/bento" component={Bento} />
        <Route path="/game" component={Game} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
