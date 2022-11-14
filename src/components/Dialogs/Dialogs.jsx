import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/> );
    let messagesElements = props.state.messages.map ( m => <Message message={m.message} key={m.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                <div className={s.container}>
                    <img src="https://i1.sndcdn.com/avatars-000529882611-ht5r1v-t500x500.jpg" alt="avatar"/>
                    <p>{ messagesElements[1] }</p>
                    <span className={s.timeRight}>11:00</span>
                </div>
                <div className={`${s.container} ${s.darker}`}>
                    <img src="https://kartinkin.net/uploads/posts/2022-06/1655668971_4-kartinkin-net-p-krasivie-kartinki-dlya-diskorda-4.jpg" alt="avatar" className={s.right}/>
                     <p>{ messagesElements[2] }</p>
                    <span className={s.timeLeft}>11:04</span>

                </div>
                    <div className={s.areaForMessage}>
                        <textarea ref={newMessageElement} placeholder={'Напишите сообщение'}></textarea>
                        <button onClick={addMessage}><i><FontAwesomeIcon icon={faEnvelope}/></i></button>
                    </div>
            </div>

        </div>
    );
}


export default Dialogs;
