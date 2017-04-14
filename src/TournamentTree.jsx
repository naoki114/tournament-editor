import React from 'react';
import Immutable from 'immutable';
import _ from 'lodash';

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
        console.log(leftChildId, rightChildId);
        return (
            <div className="node">
                <div className="right">
                    {this.renderParticipantName(node.get('leftParticipantId'))}
                    {this.renderNode(leftChildId, nodeById, nextStageLevel)}
                </div>
                <div className="left">
                    {this.renderParticipantName(node.get('rightParticipantId'))}
                    {this.renderNode(rightChildId, nodeById, nextStageLevel)}
                </div>
            </div>
        );
    }

    renderParticipantName(participantId) {
        const participants = this.props.participants;
        const participantsById = participants.get('byId');
        console.log(participantsById, participantId);
        const participantName = participantsById.getIn([participantId, 'participantName']);
        return (
            <div className="participantName">
                {participantName}
            </div>
        );
    }

    render (){
        const nodes = this.props.nodes;
        const nodeById = nodes.get('byId');
        const rootNodeId = nodes.get('rootId');
        return (
            <div className="nodes">
                {this.renderNode(rootNodeId, nodeById, 0)}
            </div>
        )
    }
}
