import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {

	render() {
		return (
			<h1
				style ={{
					backgroundColor: this.props.highlighted ? 'yellow' : 'white',
					fontSize: `${this.props.fontSize}px`
				}}
			>
				{this.props.titleText}
			</h1>
		);
	}
}

Title.propTypes = {
 	titleText: PropTypes.string.isRequired,
 	hilighted: PropTypes.bool,
 	fontSize: PropTypes.number,
 }

Title.defaultProps = {
	titleText: "defaultTitle",
 	highlighted: false,
 	fontSize: 18,
 }



 