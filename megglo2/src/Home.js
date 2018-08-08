import React, { Component } from "react";

class Home extends Component {
	componentDidMount(){
		this.props.updateNavLayout("fullScreen");
		this.props.updateColorScheme("white");
	}
  render() {
    return (
      <div></div>
    );
  }
}
 
export default Home;