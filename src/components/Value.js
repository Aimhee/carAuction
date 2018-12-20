import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Value extends Component {

    static defaultProps={
        number: -1  //아무것도안받았을때 default값을 -1로 한다.
};

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}

Value.PropTypes = {
    number:PropTypes.number        
};

export default Value;