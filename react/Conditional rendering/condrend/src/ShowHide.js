import { Component } from "react";

export default class ShowHide extends Component
{
    constructor()
    {
        super()
        this.state = {
            label: "hide",
            status: true
        }
    }
    render()
    {
        const buttClicked = () => {
            this.setState({
                label: "show",
                status: !this.state.status
            }
            )
        }
        return(
            <div>
                {(this.state.status)&& <h1>This is some text that shows or hides when the button below is clicked.</h1>}
                <button onClick={buttClicked}>{this.state.label}</button>
            </div>
        )
    }
}