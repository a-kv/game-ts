// @ts-ignore
import audio from '../../assets/prikolnoe-chavkane.mp3';
import React from 'react';
import mic from '../../assets/mic.png';
import {changeSpeedAC, incCounterAC, State} from "../../reducer";
import {connect} from "react-redux";


type PropsType = {
    counter: number,
    item: number,
    randomIndex: number,
    speed: number,
    incCounter: (counter: number) => void
    changeSpeed: (speed: number) => void
}

function Item(props: PropsType) {

    function onClickUp ()  {
        new Audio(audio).play()
        props.incCounter(props.counter);
        props.changeSpeed(props.speed - 10)
    }
    let classChanged = props.item === props.randomIndex ? 'show' : 'photo'
    return (
        <div className={'item'}>
            <img
                onClick={onClickUp}
                className={classChanged}
                src={mic}
            />
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
    return{
        incCounter: (counter: number) =>{
            dispatch(incCounterAC(counter));
        },
        changeSpeed: (speed: number) => {
            dispatch(changeSpeedAC(speed));
        }
    }
}

const ConnectedItem = connect(mapStateToProps, mapDispatchToProps)(Item)
export default ConnectedItem;
