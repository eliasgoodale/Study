import React, { Component } from 'react';
import Title from './Title'

export default class MainScreen extends Component {

	onClick(event) {
		console.log('User event', event);
		this.setState({
			//React will trigger a re-render using this, switching between true and false
			expanded: !this.state.expanded
		});
		//console.log(this.props);
		//alert (`You've clicked on ${this.props.titleText}`);
	}

	constructor(props) {
		super(props);
		//We can define the initial state in the constructor as well
		this.state = {
			expanded: false,
		};
		// We do this here because React internally optimizes to make it more efficient
		this.onClick = this.onClick.bind(this);
	}
	render() {
		//Using state, we can optionally show parts of NewsItem on when the item is in an expanded state
		let body = null;
/*
		renderBody() {
			if (this.state.expanded) {
				body = (
					<div>
					//Here we can use the variables above to contain the new values
						<Byline />
						<Description /> 
					</div>
				)
			}
			return null;
		}	
*/
		return (
			<div 
				className="news-item"
				//When we bind it in the constructor, this is all we have to type in the JSX
				onClick={this.onClick}
				// We are binding the render method's this context to the onClick method when adding it as a click handler, however, there is a better way to do this by adding a this binding within the components constructor
				// onClick={this.onClick.bind(this)}
			>
      	{/* <Image /> */}
      	<Title 
					highlighted
					titleText="Hello World!"
				/>
				{/* {this.renderBody()} */}
      	{/*<Byline />*/}
      	{/* {<Description />} */}
      </div>
    );
  }
}
