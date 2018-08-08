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
      colorScheme: "white", //white, yellow, darkBlue, lightBlue, shopHover
      lastColorScheme: "white",
    };
    this.updateNav = this.updateNav.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }
  updateNav(a){
    this.setState({layout:a});
  }
  updateColor(a){
    this.setState({lastColorScheme:this.state.colorScheme});
    this.setState({colorScheme:a});
  }
  undoColor(){
    this.setState({colorScheme: this.state.lastColorScheme});
  }
  render() {
    return (
      <HashRouter>
          <div className={"full " + this.state.colorScheme}>
            <ul className={"header " + this.state.layout}>
              <NavLink exact to="/" id="logo"><img src={'./logo.svg'} alt=""/></NavLink>
              <div className="navLinks">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/personal">Playground</NavLink></li>
                <li><NavLink onMouseEnter={() => this.updateColor("shopHover")} 
                  onMouseOut={() => this.undoColor()} to="/shop" id="shop" className="shop">Shop</NavLink>
                </li>
              </div>
            </ul>
            <div className="content">
                <Route exact path="/" render={(props) => <Home updateNavLayout={this.updateNav} updateColorScheme={this.updateColor}/>}/>
                <Route path="/about" render={(props) => <About updateNavLayout={this.updateNav} updateColorScheme={this.updateColor}/>}/>
                <Route path="/personal" render={(props) => <Personal updateNavLayout={this.updateNav} updateColorScheme={this.updateColor}/>}/>
                <Route path="/portfolio" render={(props) => <Portfolio updateNavLayout={this.updateNav} updateColorScheme={this.updateColor} />}/>
            </div>
          </div>
      </HashRouter>
    );
  }
}

export default Main;