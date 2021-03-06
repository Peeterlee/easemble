import {createStore} from 'redux';

const initialState = {
    hashtag_amount:0,
    tier:'starter'
}

export default createStore(function(state=initialState, action){
    switch(action.type){
        case 'ADD':{
            return {
                ...state,
                hashtag_amount:state.hashtag_amount + 1   
            }
        }

        case 'SUBTRACT':{
            return {
                ...state,
                hashtag_amount:state.hashtag_amount - 1
            }
        }

        case 'tier':{
            return {
                ...state,
                tier:action.tier
            }
        }
        default:
            return state;
    }
    
    
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())