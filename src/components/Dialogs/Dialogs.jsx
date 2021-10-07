import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import AddMessageForm from './Message/AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;
    console.log(newMessageBody);

    let addNewMessage = (values) => {
        alert(values.newMessageBody);
        props.sendMessage(values.newMessageBody);

    }

    if (!props.isAuth) return <Redirect to={"/Login"} />;

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div> {messagesElements} </div>

                </div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>

    )
}



export default Dialogs;