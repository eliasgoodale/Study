// You must add the PropTypes to the import list to avoid warnings
import React, { Component, PropTypes } from 'react';

export default class Title extends Component {

    render() {
        return (
            //This is how props are inserted into an element
            // Props may also be used to define attributes of an element
            <h1
                style = {{
                    backgroundColor: this.props.highlighted ? 'yellow' : 'white',
                    fontSize: `${this.props.fontSize}px`
                }}
                >
            { this.props.titleText }
            </h1>
        );
    }
}

// *this* is how we define props belonging to Title 
Title.propTypes = {
    // You may use the .isRequired to indicate required type of a prop
    titleText: PropTypes.string.isRequired,
    // You may use other types as well
    highlighted: PropTypes.bool,
    fontSize: PropTypes.number,
    //You may also use the .oneOfType function as follows
    fontSizeVariableType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    // You may specify a set of values that a property is allowed to take by using the oneOf method
    size: PropTypes.oneOf([
        'small',
        'medium',
        'large'
    ]),
    // We may also specify more complex data types such as arrays and complex objects
    simpleArray: PropTypes.array,
    simpleObject: PropTypes.object,
    arrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
    complexObject: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    }),
};
//When a value for a propType is not provided by the programmer, we can specify default values to prevent errors
Title.defaultProps = {
    highlighted: false,
    fontSize: 18,
}