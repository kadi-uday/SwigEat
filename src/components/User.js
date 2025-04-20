import { useState } from "react";

const User = ({name , location}) => {
    const [count]= useState(0);
    const[count2]= useState(1);

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : udaykadi@gmail.com </h3>
            <h4>Count {count}</h4>
            <h4> Count {count2}</h4>
        </div>
    );
}

export default User;