import { Component } from "react";
import axios from 'axios';
export default class Life extends Component
{
    constructor()
    {
        super()
        // this.change = this.change.bind(this)
        this.state = {
            num: 0,
            users: []
        }
    }
    async componentDidMount()
    {
        const {data} = await axios.get('https://api.github.com/users')

        this.setState({
            users: data
        })
        console.log("mounted")
    }
    componentDidUpdate()
    {
        console.log("Updated")
    }
    componentWillUnmount()
    {
    }

   
    render()
    {
        return(
            <div>
                <ul>
                    {
                        this.state.users.map(user => {
                            return <li key={user.id}>{user.login}</li>
                        })
                    }
                </ul>

               


            </div>
        )
    }

}