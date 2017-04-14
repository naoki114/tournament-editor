import Immutable from 'immutable';

// FIXME: ダミーデータ
export const initialState = Immutable.fromJS({
    isOpen: false,
    idList: ['1', '2', '3', '4'],
    byId: {
        1: {
            participantName: '参加者A',
        },
        2: {
            participantName: '参加者B',
        },
        3: {
            participantName: '参加者C',
        },
        4: {
            participantName: '参加者D',
        }
    }
});

export default function participantReducer(state = initialState, action) {
    switch(action){
        default: return state;
    }
}
