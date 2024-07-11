import { Component } from "react";
import './Calcu.css'
export default class Calcu extends Component
{
    constructor(props)
    {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleCalculate = this.handleCalculate.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.state = {
            value: '',
            result: 0
        }
    }// end of constructor
   handleClick(e)
   {
    this.setState({
        value: this.state.value + e
    })
   }
   handleCalculate(e)
   {
    try{
    this.setState({
        result: eval(this.state.value)
    })  
}
catch{
    alert("Error")
    this.setState({
        value:'',
        result:''
    })
}
   }
   handleClear()
   {
    this.setState({
        value: '',
        result: ''
    })
   }
    render()
    {
        return(
            <div className="whole-component p-2">
                <input className="p-3" type="text"
                id="InputField"
                placeholder={this.state.value}
                readOnly
                />
                <br></br>
                <input className="p-3 mb-3"type="number"
                id="resultField"
                placeholder={this.state.result}
                readOnly
                />

               
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <button className="btn button-col" onClick={(e) => this.handleClick(7)}>7</button>
                            <button className="btn button-col" onClick={(e) => this.handleClick(8)}>8</button>
                            <button className="btn button-col" onClick={(e) => this.handleClick(6)}>6</button>
                            <button className="btn button-op" onClick={(e) => this.handleClick('*')}>X</button>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <button className="btn button-col" onClick={(e) => this.handleClick(4)}>4</button>
                        <button className="btn button-col" onClick={(e) => this.handleClick(5)}>5</button>
                        <button className="btn button-col" onClick={(e) => this.handleClick(6)}>6</button>
                        <button className="btn button-op" onClick={(e) => this.handleClick('-')}> -</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <button className="btn button-col" onClick={(e) => this.handleClick(1)}>1</button>
                        <button className="btn button-col" onClick={(e) => this.handleClick(2)}>2</button>
                        <button className="btn button-col" onClick={(e) => this.handleClick(3)}>3</button>
                        <button className="btn button-op" onClick={(e) => this.handleClick('+')}>+</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <button className="btn button-col" onClick={(e) => this.handleClick(0)}>0</button>
                        <button className="btn button-col" onClick={(e) => this.handleClick('.')}>.</button>
                        <button className="btn button-op" onClick={(e) => this.handleClick('/')}>/</button>
                        <button className="btn button-op" onClick={(e) => this.handleCalculate('=')}>=</button>
                        </div>
                    </div>
                    <button className="btn text-light mt-3 button-clears" onClick={this.handleClear}>Clear</button>
                </div>
            </div>
        )
    }
}