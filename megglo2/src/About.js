import React, { Component } from "react";
 
class About extends Component {
	componentDidMount(){
		this.props.updateNavLayout("topNav");
		this.props.updateColorScheme("lightBlue");
	}
  render() {
    return (
      <div>
      </div>
    );
  }
}
 
export default About;