import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Description extends Component {

	render() {
		return (
			<div>
				{this.props.descriptionText}
			</div>
		)
	}
}

Description.propTypes = {
	descriptionText: PropTypes.string.isRequired,
}

Description.defaultProps = {
	descriptionText: "defaultDescription",
}
