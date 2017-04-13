import React from 'react';
import Immutable from 'immutable';

export default class TaskTable extends React.PureComponent {
    static get propTypes() {
        return {
            nodes: React.PropTypes.instanceOf(Immutable.Map).isRequired,
        }
    };

    renderNode(nodes) {
        return null;
    }

    renderPlayerName() {
        return null;
    }
     
    render (){
        const nodes = this.props.nodes;
        return (
            <div className="nodes">
                {this.renderNode(nodes)}
            </div>
        )
    }
}
