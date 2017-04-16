import {connect} from 'react-redux';
import LeftPanel from './LeftPanel.jsx';
import LeftPanelActions from './LeftPanelActions';

function mapStateToProps(state) {
    return {
        participants: state.participant,
        isOpen: state.view.leftPanel.get('isOpen'),
    };
}

function mapDispatchToEvents(dispatch) {
    return {
        onClickOpenButton: (isOpen) => {
            dispatch(LeftPanelActions.setOpen(isOpen));
        }
    };
}

const LeftPanelContainer = connect(
    mapStateToProps,
    mapDispatchToEvents
)(LeftPanel);

export default LeftPanelContainer;
