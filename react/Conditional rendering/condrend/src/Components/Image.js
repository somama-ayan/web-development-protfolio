import { Component } from "react";

export default class Image extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div>
                <img src= {this.props.image} alt="person" />
            </div>
        )
    }
}