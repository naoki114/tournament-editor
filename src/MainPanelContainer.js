import Immutable from 'immutable';
import moment from 'moment';
import { connect } from 'react-redux';

import MainPanel from './MainPanel.jsx';

const nodes = Immutable.fromJS({
    idList: ['1', '2', '3'],
        rootId: '1',
        byId: {
            1: {
                parentId: '',
                childIdLeft: '2',
                childIdRight: '3',
                winnerId: '2', // 勝ったプレイヤーのId
                leftPlayerPoint: null,
                rightPlayerPoint: null,
                leftPlayerId: '2',
                rightPlayerId: '3',
            },
            2: { // 末端のノード1
                parentId: '1',
                childIdLeft: null,
                chileIdRight: null,
                winnerId: '2',
                leftPlayerPoint: null,
                rightPlayerPoint: null,
                leftPlayerId: '2',
                rightPlayerId: '1',

            },
            3: { // 末端のノード2
                parentId: '1',
                childIdLeft: null,
                childIdRight: null,
                winnerId: '3',
                leftPlayerPoint: null,
                rightPlayerPoint: null,
                leftPlayerId: '4',
                rightPlayerId: '3',
            }
        }
});


function mapStateToProps(state) {
    return {
        nodes,
    };
}

function mapDispatchToEvents(dispatch) {
    return {};
}

const MainPanelContainer = connect(
    mapStateToProps,
    mapDispatchToEvents
)(MainPanel);

export default MainPanelContainer;
