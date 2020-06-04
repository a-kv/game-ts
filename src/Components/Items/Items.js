import React from 'react';
import Item from "../Item/Item";

class Items extends React.Component {

    render = () => {

        let gameItems = this.props.items.map(item => <Item key={item.id} randomIndex={this.props.randomIndex}
                                                              onClick={this.props.onClick} item={item}
                                                                />)
        return (
            <div className='container'>
                {gameItems}
            </div>
        )
    }
}

export default Items;
