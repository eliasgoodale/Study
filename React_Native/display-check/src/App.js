import React, { Component } from 'react';
import {Title, Byline, Description} from './Components/components';


export default class NewsItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		this.setState({
			expanded: !this.state.expanded
		});
	}

	renderBody() {
		if (this.state.expanded) {
			return(
					<div>
						<Byline>
							{/* {this.props.bylineText} */}
							Byline!
						</Byline>
						<Description>
							{/* {this.props.descriptionText} */}
							Description!
						</Description>

					</div>
				);
		}
		return null;
	}

	render() {
		return (
			<div 
				className="news-item"
				onClick={this.onClick}
			>
      	{/* <Image /> */}
      	<Title 
					highlighted
					// titleText="Hello World"
				>
					{/* {this.props.titleText} */}
					Hello World
				</Title>
				{ this.renderBody() }
      </div>
    );
  }
}
