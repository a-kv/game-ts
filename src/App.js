import React from 'react';
import './App.css';
import Items from "./Components/Items/Items";
import audio from './assets/prikolnoe-chavkane.mp3';
import logo from './assets/logo.gif';
import {connect} from "react-redux";
import {incCounterAC, makeRandomIndexAC} from "./reduser";

class App extends React.Component {

    makeRandomIndex = () => {
        this.props.makeRandomInd(Math.floor(Math.random() * this.props.items.length))
    }

    componentDidMount() {
        setInterval(this.makeRandomIndex, this.props.speed)
    }

    onClickUp = () => {
        new Audio(audio).play()
        this.props.incCounter(this.props.counter)
    }

    render = () => {
        return (
            <div className="App">
                <img src={logo} alt="logo"/>
                <span>{this.props.counter}</span>
                <div className={'container'}>
                    <Items
                        items={this.props.items}
                        randomIndex={this.props.randomIndex}
                        onClick={this.onClickUp}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        counter: state.counter,
        items: state.items,
        randomIndex: state.randomIndex,
        speed: state.speed
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        incCounter: (counter) =>{
            dispatch(incCounterAC(counter));
        },
        makeRandomInd: (randomIndex) => {
            dispatch(makeRandomIndexAC(randomIndex));
        }
    }

}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

