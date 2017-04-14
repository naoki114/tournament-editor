import React from 'react';
import TournamentTreeContainer from './TournamentTreeContainer';
import ParticipantContainer from './ParticipantContainer';

export default class MainPanel extends React.PureComponent {
    static get propTypes () {
        return {};
    }

    render() {
        return (
            <div className="mainPanel">
                <ParticipantContainer />
                <TournamentTreeContainer/>
            </div>
        );
    }
}
