import * as types from '../actions/ActionTypes';

const initialState ={
    colo : [255, 255, 255]
};

export default function (state=initialState, action){
    if(action.type === types.SET_COLOR) {
        return {
            color:action.color
        };
    }
    else {
        return state
    }
}