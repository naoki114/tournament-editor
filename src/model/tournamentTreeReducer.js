import Immutable from 'immutable';

// FIXME: ダミーデータ
export const initialState = Immutable.fromJS({
    idList: ['1', '2', '3'],
    rootId: '1',
    byId: {
        1: {
            parentId: '',
            leftChildId: '2',
            rightChildId: '3',
            winnerParticipantId: '2', // 勝ったプレイヤーのId
            leftPoint: null,
            rightPoint: null,
            leftParticipantId: '2',
            rightParticipantId: '3',
        },
        2: { // 末端のノード1
            parentId: '1',
            leftChildId: null,
            rightChildId: null,
            winnerParticipantId: '2',
            leftPoint: null,
            rightPoint: null,
            leftParticipantId: '2',
            rightParticipantId: '1',

        },
        3: { // 末端のノード2
            parentId: '1',
            leftChildId: null,
            rightChildId: null,
            winnerParticipantId: '3',
            leftPoint: null,
            rightPoint: null,
            leftParticipantId: '4',
            rightParticipantId: '3',
        }
    }
});

export default function tournamentTreeReducer(state = initialState, action) {
    switch(action){
        default: return state;
    }
}
