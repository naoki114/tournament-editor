import Immutable from 'immutable';
import leftPanelActionTypes from './leftPanelActionTypes';

export const initialState = Immutable.fromJS({
    isOpen: false,
});

export default function tournamentTreeReducer(state = initialState, action) {
    switch(action.type){
    case leftPanelActionTypes.SET_OPEN: {
        return state.set('isOpen', action.isOpen);
    }
    default: return state;
    }
}
