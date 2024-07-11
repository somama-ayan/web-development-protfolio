import { Component} from "react";
import axios from 'axios'

export default class DataAxios extends Component
{
    constructor()
    {
        super()
        this.state = {
            user: []
        }
    }

    render()
    {
        const loadData = async () => {
            //  await fetch('https://api.github.com/users')
            // .then(json => {
            //     return json.json();
            // })
            // .then(data => {
            //     this.setState({
            //         user: data
            //     })
            // } )

           const resp = await axios('https://api.github.com/users')
           this.setState({
            user: resp.data
           })
            
        }
        return(
            <div>
                <ul>
                    {
                        this.state.user.map((m,i) => {
                            return <li key={i}>{m.login} -<img width="200px" height="200px" alt="avatar"src={m.avatar_url}></img> <br /><br /></li>
                        })
                    }
                </ul>

                <button onClick={loadData}>Fetch Users</button>
            </div>
        )
    }
}