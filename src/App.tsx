import React, {useState} from "react";
import './App.css'
import {FullInput} from "./components/FullInput/FullInput";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";



function App() {
    const [message, setMessage] = React.useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const onClickBtnHandler = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={onClickBtnHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;