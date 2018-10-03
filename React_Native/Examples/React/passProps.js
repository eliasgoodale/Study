import React, { Component } from 'react';
import Title from './Title'

export default class NewsItem extends Component {

	render() {
		return(
			<div className="news-item">
				<Image />
				<Title
					//Strings may be passed in as a prop directly
					titleText="Hello World!"
					//For other data types we must surround the value with curly braces so that they are interpreted correctly as JavaScript
					highlighted={true}
					//Booleans may be passed as such or with the presence of the key only
					//highlighted
					fontSize={18}
					
				/>
				<Byline />
				<Description />
			</div>
		);
	}
}