import React from 'react';
import '../assets/style/App.scss';

class  Card extends React.Component {
    constructor(props) {
        super(props)
        const deg = Math.random() * 90 -45
        this._transform = `rotate(${deg}deg)`
    }

    render() {
        return (
            <div className="Card" style={{transform: this._transform}} >
               <img src={this.props.image} alt={this.props.name} />
            </div>
        )
    }
}

export default Card