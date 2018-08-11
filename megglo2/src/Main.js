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
      animate: "",
    };
    this.updateNav = this.updateNav.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.applyAnimation = this.applyAnimation.bind(this);
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
  applyAnimation(){
    this.setState({animate:"slideLeft"});
  }
  render() {
    return (
      <HashRouter>
          <div className={"full " + this.state.colorScheme}>
            <ul className={"header " + this.state.layout}>
              <NavLink exact to="/" id="logo"><img src={'./logo.svg'} alt=""/></NavLink>
              <div className="navLinks">
                <li className={this.state.animate}><NavLink to="/about">About</NavLink></li>
                <li className={this.state.animate}><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li className={this.state.animate}><NavLink to="/personal">Playground</NavLink></li>
                <li className={this.state.animate}><NavLink onMouseEnter={() => this.updateColor("shopHover")} 
                  onMouseOut={() => this.undoColor()} to="/shop" id="shop" className="shop">Shop</NavLink>
                </li>
                
              </div>
            </ul>
            <div className="content">
                <Route exact path="/" render={(props) => <Home applyAnimation={this.applyAnimation} updateNavLayout={this.updateNav} updateColorScheme={this.updateColor}/>}/>
                <Route path="/about" render={(props) => <About applyAnimation={this.applyAnimation} updateNavLayout={this.updateNav} updateColorScheme={this.updateColor}/>}/>
                <Route path="/personal" render={(props) => <Personal applyAnimation={this.applyAnimation} updateNavLayout={this.updateNav} updateColorScheme={this.updateColor}/>}/>
                <Route path="/portfolio" render={(props) => <Portfolio applyAnimation={this.applyAnimation} updateNavLayout={this.updateNav} updateColorScheme={this.updateColor} />}/>
            </div>
          </div>
      </HashRouter>
    );
  }
}

export default Main;