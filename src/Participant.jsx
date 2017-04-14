import React from 'react';
import Immutable from 'immutable';
import className from 'classname';

export default class ParticipantBox extends React.PureComponent {
    static get propTypes() {
        return {
            participants: React.PropTypes.instanceOf(Immutable.Map).isRequired,
            isOpen: React.PropTypes.bool.isRequired,
        }
    };
    render(){
        const isOpen = this.props.isOpen;
        const rootPanelClassName = className({
            participant: true,
            isOpen,
        });
        return (
            <div className={rootPanelClassName}>
                {this.renderParticipants()}
            </div>
        );
    }
}
