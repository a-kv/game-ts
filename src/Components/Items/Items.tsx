import React from 'react';
import Item from "../Item/Item";
import {connect} from "react-redux";
import {State} from "../../reducer";


type PropsType = {
    items: number[],
}

function Items(props: PropsType) {


    let gameItems = props.items.map((item: any) =>
        <Item key={item.id} item={item} />)
    return (
        <div className='container'>
                        {gameItems}
        </div>
    )
}


const mapStateToProps = (state: State) => {
    return{
        items: state.items,
    }

}

const ConnectedItems = connect(mapStateToProps, null)(Items)
export default ConnectedItems;
