import { Component } from "react";
import Image from "./Image";
import Details from "./Details";

export default class Application extends Component {

    render() {
        return (
            <div>
                <Image
                    image="https://randomuser.me/api/portraits/men/73.jpg"
                />
              
                <Details
                    para="This is a paragraph given by another component named, 'Application.js' as a props"
                    butt="Click Me"
                />
            </div>
        )
    }
}