import Immutable from 'immutable';
import { connect } from 'react-redux';

import TournamentTree from './TournamentTree.jsx';

function mapStateToProps(state) {
    console.log(state);
    return {
        participants: state.participant,
        nodes: state.tournamentTree,
    };
}

function mapDispatchToEvents(dispatch) {
    return {};
}

const TournamentTreeContainer = connect(
    mapStateToProps,
    mapDispatchToEvents
)(TournamentTree);

export default TournamentTreeContainer;
