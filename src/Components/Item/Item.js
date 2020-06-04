import React from 'react';
import mic from '../../assets/mic.png';

class Item extends React.Component {

    render = () => {
        let classChanged = this.props.item === this.props.randomIndex ? 'show' : 'photo'
        return (
                    <div className={'item'}>
                        <img
                        onClick={this.props.onClick}
                        className={classChanged}
                        src={mic}

                    />
                    </div>
        );
    }
}

export default Item;
