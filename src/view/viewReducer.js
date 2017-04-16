import { combineReducers } from 'redux';
import leftPanelReducer from './leftPanel/leftPanelReducer';

export default combineReducers({
    leftPanel: leftPanelReducer,
});
