import { Component  } from "react";

export default class ToDoList extends Component
{
    constructor()
    {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.state = {
            item: "",
            list: [],
            check: false,
            status: []
        }

    }
    handleChange(e)
    {
        this.setState({
            item:  e.target.value
        })
        console.log(e)
    }
    handleCheckbox(e)
    {
        if(e.target.value === "checked")
        {
       this.setState({
        check: true
       })
    }
    else
    {
        this.setState({
            check: false
        })
    }
    }
    handleSubmit(e)
    {
        e.preventDefault();
        if(this.state.item === "")
        {
            alert("Null is not allowed!")
        }
        else if(this.state.list.indexOf(this.state.item) < 0)
        {
            this.setState({
                list: this.state.list.concat(this.state.item),
                item: "",
                status: this.state.status.concat(this.state.check),
                check: ""
            })
        }
        else{
            alert("Item already present!")
        }  
    }// end of handleSubmit

    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    id="item"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChange}
                     />
                     <button>Add</button>
                </form>
                <ul>
                    {
                        this.state.list.map((l,k) => {
                            return(<li key={k}>
                                <input 
                                    type="checkbox"
                                    id="checkbox"
                                    name="checkbox"
                                    label="label"
                                    key={k}
                                    value={this.state.check}
                                    onChange={this.handleCheckbox}
                                />
                                {l}
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}