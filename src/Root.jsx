import React from 'react';
import MainPanel from './MainPanel.jsx';

export default class Root extends React.PureComponent {
    static get propTypes() {
        return {};
    }

    render() {
        return (
            <div className="root">
                <MainPanel />
            </div>
        );
    }
}
