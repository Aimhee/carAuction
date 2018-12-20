import React, { Component } from 'react';
import propTypes from 'prop-types'; 

class App extends Component { //1.App에는 
    static defaultProps={
        //name:'Jun',
        //number: 0
    };

    render() {
        return (
            <div>
                가즈아
            </div>
        );
    }
}

App.propTypes = { //3. propType이
    name:propTypes.number //2.필요한 구성성분을 체크하게한다. 누가? ,//name의 PropType은 number로 지정해주세요
    //word:PropTypes.name.isRequired // word의 PropType은 name으로 반드시 적어주세요.
};

export default App;