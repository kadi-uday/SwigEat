import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
        super(props);
        // console.log("Parent constructor");
    }
    componentDidMount() {
        // console.log("Parent component did mount");
    }
    render(){
        // console.log("Parent render ");
        return (
            <div>
                <UserClass  />
            </div>
        )}
}

export default About;