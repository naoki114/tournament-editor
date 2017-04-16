import { combineReducers } from 'redux';
import participantReducer from './model/participantReducer';
import tournamentTreeReducer from './model/tournamentTreeReducer';
import viewReducer from './view/viewReducer';

export default combineReducers({
    participant: participantReducer,
    tournamentTree: tournamentTreeReducer,
    view: viewReducer,
});
