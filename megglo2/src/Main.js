import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Personal from "./Personal";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activetab: "", //which tab is active? 
      layout: "topNav", //fullScreen or topNav, corresponding CSS classes reformat page
      colorScheme: "", //light or dark background color? determines how text renders
    };
  }
  render() {
    return (
      <HashRouter>
        <div>
          <ul className={"header "+ this.state.colorScheme + " " + this.state.layout}>
            <li><NavLink exact to="/" id="logo"><img src={'./logo.svg'} alt=""/></NavLink></li>
            <div className="navLinks">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/personal">Playground</NavLink></li>
              <li><NavLink to="/shop" id="shop">Shop</NavLink></li>
            </div>
          </ul>
          <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/personal" component={Personal}/>
              <Route path="/portfolio" component={Portfolio}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;