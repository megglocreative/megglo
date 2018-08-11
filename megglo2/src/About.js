import React, { Component } from "react";
import aboutText from './websiteText.js';
 
class About extends Component {
	componentDidMount(){
		this.props.updateNavLayout("topNav");
		this.props.updateColorScheme("white");
	}
  render() {
    return (
      <div>
      	<div class="primaryHeadingContainer">
      		<h1>{aboutText.primaryHeading}</h1>
      	</div>
      	<div className="textContainer">
	      	<h3>{aboutText.emphasizedText}</h3>
	      	<div className="twoColumns">
	      		<h4>{aboutText.columnHeader1}</h4>
	      		<p>{aboutText.columnBody1}</p>
	      	</div>
	      	<div className="twoColumns">
	      		<h4>{aboutText.columnHeader2}</h4>
	      		<p>{aboutText.columnBody2}</p>
			</div>
      	</div>
      	<div></div>
      </div>
    );
  }
}
 
export default About;