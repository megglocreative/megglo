import React, { Component } from "react";
 
class Portfolio extends Component {
	componentDidMount(){
		this.props.applyAnimation("slideLeft");
		setTimeout(()=>{ 
			this.props.updateNavLayout("topNav");
			this.props.updateColorScheme("darkBlue");
		 }, 1000);	
	}
  render() {
    return (
      <div>
      </div>
    );
  }
}
 
export default Portfolio;