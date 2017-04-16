import React from 'react';
import TournamentTreeContainer from './rightPanel/TournamentTreeContainer';
import LeftPanelContainer from './leftPanel/LeftPanelContainer';

export default class Root extends React.PureComponent {
    static get propTypes () {
        return {};
    }

    render() {
        return (
            <div className="root">
                <LeftPanelContainer />
                <div className="rightPanel">
                    <TournamentTreeContainer/>
                </div>
            </div>
        );
    }
}
