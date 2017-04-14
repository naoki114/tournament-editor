import { combineReducers } from 'redux';
import participantReducer from './participantReducer';
import tournamentTreeReducer from './tournamentTreeReducer';

export default combineReducers({
    participant: participantReducer,
    tournamentTree: tournamentTreeReducer,
});
