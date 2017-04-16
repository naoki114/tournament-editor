import leftPanelActionTypes from './leftPanelActionTypes';

export default class LeftPanelActions {
    static setOpen(isOpen){
        return ({
            type: leftPanelActionTypes.SET_OPEN,
            isOpen
        });
    }
}