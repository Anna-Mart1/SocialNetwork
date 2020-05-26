import profileReduser from './profileReducer';
import dialogsReduser from './dialogsReducer';

let store = {
    _state: {

        profilePage: {
            posts: [
                {
                    message: 'It\'s my first post',
                    likesCounts: 15,
                },
                {
                    message: 'Hi, how are you?',
                    likesCounts: 25,
                },

            ],
            newPostText: 'new text',
        },

        dialogsPage: {
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
            newMessageText: 'enter your message',

        },
    },
    getState() {
        debugger;
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subsribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(store._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(store._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }


}


export default store