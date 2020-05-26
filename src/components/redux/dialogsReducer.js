const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSSAGE_TEXT = 'UPDATE-NEW-MESSSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'User1',
        },
        {
            id: 2,
            name: 'User2',
        },
        {
            id: 3,
            name: 'User3',
        },
        {
            id: 4,
            name: 'User4',
        },
        {
            id: 5,
            name: 'User5',
        },
        {
            id: 6,
            name: 'User6',
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Message1',
        },
        {
            id: 2,
            message: 'Message2',
        },
        {
            id: 3,
            message: 'Message3',
        },
        {
            id: 4,
            message: 'Message4',
        },
        {
            id: 5,
            message: 'Message5',
        },
        {
            id: 6,
            message: 'Message6',
        },
    ],
    newMessageText: '',

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {
                    id: 7,
                    message: state.newMessageText
                }]
            }
        }

        case UPDATE_NEW_MESSSAGE_TEXT:
            return {...state, newMessageText: action.newText};


        default:
            return state;
    }
};


export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
};
export const onChangeNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSSAGE_TEXT,
        newText: text,
    }
};

export default dialogsReducer;