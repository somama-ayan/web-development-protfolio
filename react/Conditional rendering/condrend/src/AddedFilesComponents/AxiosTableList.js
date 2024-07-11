import { Component } from "react";
import axios from "axios";

const table = {
    border_collapse: 'collapse',
    width: '100%'
  }

  const td = {
    border: '1px solid #ccc',
    padding: '10px',
    text_align: 'center'
  }

  const img = {
    max_width: '100px',
    height: '100px',
    display: 'block',
    margin: '0 auto'
  
  }



// Import the CSS file
export default class AxiosTableList extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }

    }
    render() {
        const loadTable = async () => {
            const resp = await axios('https://api.github.com/users')
            this.setState({
                list: resp.data
            })

        }
        return (
            <div>
               
              
                <table style={table} className="table table-stripped">
                    <thead>
                        
                        <tr>
                            <th scope="col">Log In</th>
                            <th scope="col">Id</th>
                            <th scope="col">Node Id</th>
                            <th scope="col">Avatar</th>
                        </tr>
                    </thead>
                    <tbody> 
                    <tr>
                        <td style={td}>
                            {this.state.list.map(f => {
                                return <tr colspan="2">{f.login}</tr>
                            })}
                        </td>
                        <td style={td}>
                            {this.state.list.map(f => {
                                return <tr colspan="2">{f.id}</tr>
                            })}
                        </td>
                        <td style={td}>
                            {this.state.list.map(f => {
                                return <tr colspan="2">{f.node_id}</tr>
                            })}
                        </td>
                        <td style={td}>
                            {this.state.list.map(f => {
                                return <tr colspan="2"><img style={img} alt="avatar" src={f.avatar_url}></img><br/></tr>
                            })}
                        </td>
                    </tr>



                            </tbody>
                </table>
                <button onClick={loadTable}>Load Table</button>
                
            </div>
        )
    }
}