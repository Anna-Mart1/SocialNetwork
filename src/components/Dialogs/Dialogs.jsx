import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
       props.onSendMessage();
        //props.dispatch ( sendMessageActionCreator() )
    }

    let onChangeNewMessage = () => {
        let text = newMessageElement.current.value;
        props.onChangeNewMessage(text);
        //props.dispatch ( onChangeNewMessageActionCreator(text) );
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>

            <div className={s.messages}>
                {props.messages.map(m => <Message id={m.id} message={m.message}/>)}
                <div>
                    <textarea ref={newMessageElement}
                              placeholder='enter your message'
                              onChange={ onChangeNewMessage }
                              value={ props.newMessageText }/>
                </div>
                <div>
                    <button onClick={ sendMessage }> Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;