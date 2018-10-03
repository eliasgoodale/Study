import React, { Component, PropTypes } from 'react';
import Title from './Title'

export default class NewsItem extends Component {

	onClick(event) {
		console.log('User event', event);
		alert (`You've clicked on ${this.props.titleText}`);
	}

	constructor(props) {
		super(props);
		// We do this here because React internally optimizes to make it more efficient
		this.onClick = this.onClick.bind(this);
	}
	
	render() {
		return (
			<div 
				className="news-item"
				//When we bind it in the constructor, this is all we have to type in the JSX
				onClick={this.onClick}
				// We are binding the render method's this context to the onClick method when adding it as a click handler, however, there is a better way to do this by adding a this binding within the components constructor
				// onClick={this.onClick.bind(this)}
			>
      	<Image />
      	<Title />
      	<Byline />
      	<Description />
      </div>
    );
  }
}