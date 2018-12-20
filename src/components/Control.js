import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

function createWarning(funcName){
    return ()=> console.warn(funcName + 'is not defined')
};

class Control extends Component {

    static defaultProps={
        onPlus:()=>createWarning('onPlus'),
        onSubtrack:()=>createWarning('onSubtract'),
        onRandomizeColor:()=>createWarning('onRandomizeColor')
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtrack}>-</button>
                <button onClick={this.props.onRandomizeColor}>RandomSize Color</button>
            </div>
        )
    }
}

Control.PropTypes = {
    onPlus:PropTypes.func,
    onSubtrack:PropTypes.func,
    onRandomizeColor:PropTypes.func                    
};

export default Control;