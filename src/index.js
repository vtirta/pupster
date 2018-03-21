import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
// import App from "./App";
import "./index.css";
import { 
    BrowserRouter as Router, 
   /* Link, */
    Route,
    Switch
  }
from "react-router-dom";

ReactDOM.render(
  <div className="container">
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/Search" component={Search} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);
