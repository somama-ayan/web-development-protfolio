import { Component } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
export default class CartIcon extends Component
{
    constructor()
    {
        super()
        this.handleIconCart = this.handleIconCart.bind(this)
        this.state = {
            num: 0
        }
    }
    componentDidMount()
    {

    }
    componentDidUpdate()
    {

    }
    componentWillUnmount()
    {

    }
    handleIconCart()
    {
        
    }
    render()
    {
        return(
            <div>
                <PiShoppingCartSimpleBold /><span>{this.state.num}</span>
            </div>
        )
    }
}