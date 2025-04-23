import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log("Child Constructer");
        this.state = {
            userInfo: {
            name: "Dummy",
            location: "Default",
        }}
    }
    async componentDidMount() {
        // console.log("Child component did mount");
        const data = await fetch("https://api.github.com/users/kadi-uday");
        const json = await data.json();
        this.setState( {
            userInfo : json,
        });
        console.log(json);
    }

    render() {
        // console.log("Child render");

        const { name , location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name} </h2>
                <h3>Location : {location} </h3>
                <h3>Contact : udaykadi@gmail.com </h3>
                <img src={avatar_url} alt="user-img" ></img>
            </div>
        );
    }
}

export default UserClass;


/**
 *   --- MOUNTING---
 *       constructor(dummy)
 *       render (dummy)
 *          <HTML (dummy)>
 *       componentDidMount
 *          <API call>
 *          <this.setState -> state variable is updated
 *   --- UPDATE ---
 *       render( API data )
 *       < HTML (new API data) >
 *       component DidUpdate() will call
 */