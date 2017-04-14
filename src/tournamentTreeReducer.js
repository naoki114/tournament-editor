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
            winnerId: '2', // 勝ったプレイヤーのId
            leftPlayerPoint: null,
            rightPlayerPoint: null,
            leftParticipantId: '2',
            rightParticipantId: '3',
        },
        2: { // 末端のノード1
            parentId: '1',
            leftChildId: null,
            rightChildId: null,
            winnerId: '2',
            leftParticipantPoint: null,
            rightParticipantPoint: null,
            leftParticipantId: '2',
            rightParticipantId: '1',

        },
        3: { // 末端のノード2
            parentId: '1',
            leftChildId: null,
            rightChildId: null,
            winnerId: '3',
            leftParticipantPoint: null,
            rightParticipantPoint: null,
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
