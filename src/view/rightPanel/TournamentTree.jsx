import React from 'react';
import Immutable from 'immutable';
import _ from 'lodash';
import classNames from 'classnames';

export default class TournamentTree extends React.PureComponent {
    static get propTypes() {
        return {
            participants: React.PropTypes.instanceOf(Immutable.Map).isRequired,
            nodes: React.PropTypes.instanceOf(Immutable.Map).isRequired,
        }
    };

    renderNode(nodeId, nodeById, stageLevel) {
        if(_.isNil(nodeId)) {
            return null;
        }
        const node = nodeById.get(nodeId);
        if(_.isNil(node)) {
            return null;
        }
        const leftChildId = node.get('leftChildId');
        const rightChildId = node.get('rightChildId');
        const nextStageLevel = stageLevel + 1;
        return (
            <div className="node">
                {this.renderParticipantName('winner', node.get('winnerParticipantId'))}
                <div className="children">
                    <div className="right">
                        {this.renderParticipantName('versus', node.get('leftParticipantId'))}
                        {this.renderNode(leftChildId, nodeById, nextStageLevel)}
                    </div>
                    <div className="left">
                        {this.renderParticipantName('versus', node.get('rightParticipantId'))}
                        {this.renderNode(rightChildId, nodeById, nextStageLevel)}
                    </div>
                 </div>
            </div>
        );
    }

    renderParticipantName(className, participantId) {
        const participants = this.props.participants;
        const participantsById = participants.get('byId');
        const participantName = participantsById.getIn([participantId, 'name']);
        const participantNameClassNames = classNames(
            className,
            {
                participantName: true,
            }
        );
        return (
            <div className={participantNameClassNames}>
                <span className="text">{participantName}</span>
            </div>
        );
    }

    render (){
        const nodes = this.props.nodes;
        const nodeById = nodes.get('byId');
        const rootNodeId = nodes.get('rootId');
        return (
            <div className="tournamentTree">
                {this.renderNode(rootNodeId, nodeById, 0)}
            </div>
        )
    }
}
