import { Component } from "react";
import './Home.css'
import Calcu from "./Calcu.js";
import { PiSmileyFill} from "react-icons/pi"
export default class Home extends Component
{
    render()
    {
        return(
            
            <div className="Container whole-Component">
                <section>
                <div className="row">
                    <div className="col text-center p-5">
                        <h2 className="text-primary">Great APP<br />That Makes Your Life Easier</h2>
                        <p>Use the Calculator App for free and say no Thanks
                            <PiSmileyFill className="text-warning"/>!</p>
                    </div>
                    <div className="col text-center p-3">
                       <Calcu />
                    </div>
                </div>
                </section>
            </div>
        )
    }
}