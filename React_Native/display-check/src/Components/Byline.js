import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Byline extends Component {

	render() {
		return (
			<div>
				{this.props.bylineText}
			</div>
		);
	}
}

Byline.propTypes = {
	 bylineText: PropTypes.string.isRequired
}

Byline.defaultProps = {
	bylineText: "DefaultByline",	
}