import React, {useEffect, useState} from 'react';
import './App.css';
import Items from "./Components/Items/Items";
import logo from "./assets/logo.gif";
import {connect} from "react-redux";
import {changeSpeedAC, incCounterAC, makeRandomIndexAC, State} from "./reducer";

type PropsType = {
    counter: number,
    items: number[],
    randomIndex: number,
    speed: number
    makeRandomInd: (randomIndex: number) => void
}

function App(props: PropsType) {

    function makeRandomIndex() {
        props.makeRandomInd(Math.floor(Math.random() * props.items.length))
    }

    useEffect(() => {
        const id = setInterval(() => {
            makeRandomIndex()
        }, props.speed);
        return () => clearInterval(id);
    }, [props.randomIndex]);



    return (
        <div className="App">
            <img src={logo} alt="logo"/>
            <span>{props.counter}</span>
            <div className={'container'}>
                <Items items={props.items}/>
            </div>
        </div>
    );
}


const mapStateToProps = (state: State) => {
    return {
        counter: state.counter,
        items: state.items,
        randomIndex: state.randomIndex,
        speed: state.speed
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {

        makeRandomInd: (randomIndex: number) => {
            dispatch(makeRandomIndexAC(randomIndex));
        },
    }

}


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

