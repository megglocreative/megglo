import React, { Component } from "react";
 
class Personal extends Component {
	componentDidMount(){
		this.props.updateNavLayout("topNav");
		this.props.updateColorScheme("yellow");
	}
  render() {
    return (
      <div>
      </div>
    );
  }
}
 
export default Personal;