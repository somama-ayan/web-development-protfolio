import { Component } from "react";
export default class Counter extends Component
{
    constructor()
    {
        super()
        this.state = {
            count: 0
        }
    }
    render()
    {
        const plus = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        const reset = () => {
           this.setState({
            count: 0
           }) 
        }
        const minus = () => {
            this.setState({
                count: this.state.count - 1
            })
        }
        const wholeCounterContain = {
            width: '360px',
            height: '230px',
            padding: '30px',
            marginTop: '10px',
            marginBottom: '0px'
        }
        return(
            <div className="container bg-success text-light"style={wholeCounterContain}>
                <h1 className="text-center">Count:</h1>
                <h1 className="text-center pb-3 text-danger">{this.state.count}</h1>
                <div className="row">
                    <div className="col-lg">
                        <button onClick={plus}className="btn btn-outline-light btn-lg">+1</button>
                    </div>
                    <div className="col-lg">
                        <button onClick={reset}className="btn btn-outline-light btn-lg">Reset</button>
                    </div>
                    <div className="col-lg">
                        <button onClick={minus} className="btn btn-outline-light btn-lg">-1</button>
                    </div>
                </div>
            </div>
        )
    }

}