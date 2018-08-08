import React, { Component } from "react";
 
class Portfolio extends Component {
	componentDidMount(){
		this.props.updateNavLayout("topNav");
		this.props.updateColorScheme("darkBlue");
	}
  render() {
    return (
      <div>
      </div>
    );
  }
}
 
export default Portfolio;