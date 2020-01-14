import React from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Footer from "./components/Footer";
import ArticleList from "./components/ArtcileList";
import { Switch, Route } from "react-router-dom";
import Temples from "./pages/Temples";
import Jardins from "./pages/Jardins";
import Audela from "./pages/Audela";
import Visites from "./pages/Visites";

function App() {
  return (
    <div class="App" className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route path="/visites" component={Visites} />
        <Route path="/temples" component={Temples} />
        <Route path="/jardins" component={Jardins} />
        <Route path="/audela" component={Audela} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
