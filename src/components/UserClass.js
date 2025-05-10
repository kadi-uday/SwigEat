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
            <div className=" gap-8 justify-center items-center mt-20 font-['Segoe_UI']">
                <div className="user-card  mt-35  shadow-xl border-[2px] border-[#d7d7d7] rounded-xl p-5 max-w-5xl mx-auto text-black  transition duration-200 ease-in-out transform hover:scale-101 hover:shadow-2xl cursor-pointer">
                    <div className="flex justify-between items-center w-full gap-6">
                        <div className="flex flex-col gap-2 w-3/4">
                            <h2 className=" text-3xl font-bold mb-2">About the Developer</h2>
                            <p className="text-[18px]">
                                Hi! I'm Kadi Uday, a web developer passionate about building modern, responsive apps using React. This Swiggy clone was built as a project to practice API integration, component-based architecture, and responsive design.
                            </p>
                            <div className="mt-10">
                                <h2 className=" text-3xl font-bold mt-[-20px] mb-4">About the Project</h2>
                                <p className="text-[18px]">This is a clone of the Swiggy food delivery app built using React.js. It features routing, dynamic menu pages, and responsive UI using Tailwind CSS.</p>
                            </div>
                        </div>
                        <img className="w-50 h-50 rounded-xl" src={avatar_url} alt="user-img" ></img>
                    </div>    
                </div>
              
                <div className="flex justify-center items-center gap-10 mt-8 shadow-xl border-[2px] border-[#d7d7d7] rounded-xl p-6 max-w-5xl mx-auto text-black  transition duration-200 ease-in-out transform hover:scale-101 hover:shadow-2xl cursor-pointer">
                    <div className="flex-1 flex flex-col items-center">
                          <h2 className="text-2xl font-bold mb-2 pr-35">Tech Stack</h2>
                        <ul className="list-disc ml-5 text-[18px] ">
                            <li>⚛️ React.js</li>
                            <li>🎨 Tailwind CSS</li>
                            <li>📦 Parcel Bundler</li>
                            <li>🛠️ Custom Hooks & Routing</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex flex-col items-center" >
                    <h2 className="text-2xl font-bold mb-2 pr-40 ">Features</h2>
                    <ul className="list-disc ml-5 text-[18px]"> 
                        <li>🍔 Dynamic restaurant menu</li>
                        <li>🔍 Search functionality</li>
                        <li>🧩 Modular components</li>
                        <li>📱 Responsive design</li>
                    </ul>
                </div>
                </div>
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