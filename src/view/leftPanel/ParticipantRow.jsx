import React from 'react';
import Immutable from 'immutable';

export default class ParticipantRow extends React.PureComponent {
    static get propTypes () {
        return ({
            participant: React.PropTypes.instanceOf(Immutable.Map).isRequired,
        });
    }

    render() {
        const participant = this.props.participant;
        return (
            <div className="participantRow">
                <button className="delete" />
                {participant.get('name')}
            </div>
        );
    }
}