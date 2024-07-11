import { Component } from "react";

export default class NoArrow extends Component
{
    constructor()
    {
        super()
        this.state = {
            id: 0
        }
        
        
    }
    render()
    {
        function incr()
        {
           this.setstate({
            id: this.setstate.id++
           }) 
        }
        const handleInc = incr.bind(this)
        return(
            <div>
                <h1>{this.state.id}</h1>
                <button onClick={handleInc}>increment</button>
            </div>
        )
    }
}