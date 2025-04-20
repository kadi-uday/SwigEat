import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <User name = "Kadi Uday" location = "Hyderabad" />
            <UserClass  name = "Kadi Uday (class)" location = "Hyderabad (class)"/>
        </div>
    )
}

export default About;