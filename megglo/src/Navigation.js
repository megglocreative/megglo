import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Personal from "./Personal";
import Portfolio from "./Portfolio";
import About from "./About";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activetab: "", //which tab is active? 
      layout: "fullScreen", //fullScreen or topNav, corresponding CSS classes reformat page
      colorScheme: "", //light or dark background color? determines how text renders
    };
  }
 // makeNavFullScreen(){
   // this.setState({layout:"fullScreen"});
  //}
  render() {
    return (
        <HashRouter>
          <div>
            <ul className={"header "+ this.state.colorScheme + " " + this.state.layout}>
              <div>
                <li><NavLink exact to="/" id="logo"><img src={'./logo.svg'} alt=""/></NavLink></li>
                <div className="navLinks"> 
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                  <li><NavLink to="/personal">Playground</NavLink></li>
                  <li><NavLink to="/shop" id="shop">Shop</NavLink></li>
                </div>
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
 
export default Navigation;