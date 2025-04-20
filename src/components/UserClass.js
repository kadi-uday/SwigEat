import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 1, 
        };
    }

    render() {
        const { name , location } = this.props;
        const {count , count2} = this.state;
        return (
            <div className="user-card">
                <h2>Name: {name} </h2>
                <h3>Location : {location} </h3>
                <h3>Contact : udaykadi@gmail.com  (class)</h3>
                <h4> Count: {count}</h4>
                <h4> Count: {count2}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count +1,
                        count2: this.state.count2 +2,
                    });
                }}
                >count increase</button>
            </div>
        );
    }
}

export default UserClass;