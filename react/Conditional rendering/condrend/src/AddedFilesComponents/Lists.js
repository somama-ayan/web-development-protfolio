import { Component } from "react";

export default class Lists extends Component
{
    constructor()
    {
        super()
        this.state = {
            list: [],
            status: true
        }
    }
    render()
    {
        const loadData = () => 
        {
            if(this.state.list)
            {
                fetch('https://api.github.com/users').then(json => json.json()).then((data) => {
                this.setState({
                    list: data
                })
            console.log("i am clicked")

            })
            document.getElementById("hideData").innerHTML = "Hide Data"
            }
           if(this.state.list !== null)
           {
            console.log("i am not clicked")
            this.setState({
                list: [],
                status: false
            })
           }
            
        }
        return(
            <div>
                    <ol>
                        {
                            this.state.list.map( (m , i) =>  <li key={i}>{m.login}</li>   )
                        }
                    </ol>
                    <button id="hideData" onClick={loadData}>Load</button>

            </div>
        )
    }
}