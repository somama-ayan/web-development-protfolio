import { Component } from "react";
// import galaxyA34 from './CardsImages/galaxyA34.jpg's
import CartIcon from "../CartIcon/CartIcon";
export default class Card extends Component {

    constructor(props) {
        super(props)
        
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }
    handleAddToCart()
        {
            
        }
    render() {
        return (
                <div className="card">
                    <img className="card-img" src={this.props.img} alt="Card-cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">RS. {this.props.price} PKR.</p>
                        <button onClick={this.handleAddToCart} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
        )
    }
}