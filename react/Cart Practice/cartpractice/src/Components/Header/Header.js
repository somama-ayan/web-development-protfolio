import React from "react";
import { Component } from "react";
// import CartIcon from "./Components/CartIcon/CartIcon.js";

import logo from './logo.jpg'
import './Header.css'
import CartIcon from "../CartIcon/CartIcon";
export default class Header extends Component
{
    constructor()
    {
        super()
        this.handleCartIcon = this.handleCartIcon.bind(this)
    }
    handleCartIcon()
    {
        
    }
    render()
    {
        return(
            <div>
                <div className="container-fluid bg-dark text-light">
                    <div className="row">
                        <div className="col">
                            <img width="120px"height="120px" src={logo} alt="shopping-cart" />
                        </div>
                        <div className="col-1 mt-3">
                        <button className="btn bg-secondary"onClick={this.handleCartIcon}><CartIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}