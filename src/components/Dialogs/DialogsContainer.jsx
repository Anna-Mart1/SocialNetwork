import React from 'react';
import {onChangeNewMessageActionCreator, sendMessageActionCreator} from '../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => dispatch(sendMessageActionCreator()),
        onChangeNewMessage: (text) => dispatch(onChangeNewMessageActionCreator(text)),
    }
};


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


