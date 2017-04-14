import {connect} from 'react-redux';
import Participant from './Participant.jsx';

function mapStateToProps(state) {
    return {
        participants: state.participant,
        isOpen: state.participant.get('isOpen'),
    };
}

function mapDispatchToEvents(dispatch) {
    return {};
}

const ParticipantContainer = connect(
    mapStateToProps,
    mapDispatchToEvents
)(Participant);

export default ParticipantContainer;
