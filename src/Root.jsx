import React from 'react';
import MainPanelContainer from './MainPanelContainer';

export default class Root extends React.PureComponent {
    static get propTypes() {
        return {};
    }

    render() {
        return (
            <div className="root">
                <MainPanelContainer />
            </div>
        );
    }
}
