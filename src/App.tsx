import React from 'react';
import './App.css'
import Header from "./components/Site/Header";
import Body from "./components/Site/Body";
import Footer from "./components/Site/Footer";
import YouTube from "./components/YouTube/YouTube";
import Button from "./components/Button";

function App() {
    const Button1Foo = (name: string, age: number) => {
        console.log(`Hi im ${name}! I am ${age} years old!`)
    }
    const Button2Foo = (name: string, age: number) => {
        console.log(`Hi im ${name}! I am ${age} years old!`)
    }
    const StupidButton = () => {
        console.log(`im stupid Button`)
    }

    return (
        <div className={'App'}>
            {/*<Header header={'Header'}/>*/}
            {/*<YouTube/>*/}
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Vasya', 22)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Ivan', 15)}/>
            <Button name={'Stupid button'} callBack={StupidButton}/>
            {/*<Body body={'----Body----'}/>*/}
            {/*<Footer footer={'Footer'}/>*/}
        </div>
    );
}

export default App;