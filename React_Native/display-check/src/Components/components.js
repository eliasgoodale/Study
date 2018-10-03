import React from 'react';
import PropTypes from 'prop-types'

export const Title = (props) => (
	<h1
		style={{
			backgroundColor: props.highlighted ? 'yellow' : 'white',
			fontSize: `${props.fontSize}px`
		}}
	>
		{props.children}
	</h1>
);

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

export const Byline = (props) => (
	<div>
		{props.children}
	</div>
);

Byline.propTypes = {
	bylineText: PropTypes.string.isRequired
}

Byline.defaultProps = {
 bylineText: "DefaultByline",	
}

export const Description = (props) => (
	<div>
		{props.children}
	</div>
);

Description.propTypes = {
	descriptionText: PropTypes.string.isRequired,
}

Description.defaultProps = {
	descriptionText: "defaultDescription",
}


