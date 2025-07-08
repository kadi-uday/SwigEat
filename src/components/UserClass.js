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
<div className="gap-4 md:gap-6 lg:gap-8 justify-center items-center mt-20 md:mt-20 lg:mt-36 font-['Segoe_UI'] px-4 min-h-screen overflow-auto">
  <div className="user-card mt-6 md:mt-8 lg:mt-12 shadow-xl border-[2px] border-[#d7d7d7] rounded-xl p-3 md:p-4 lg:p-5 max-w-5xl mx-auto text-black transition duration-200 ease-in-out transform hover:scale-100 hover:shadow-2xl cursor-pointer">
    
    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-3 md:gap-4 lg:gap-6">

<div className="w-full md:w-3/4">
  <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-3 lg:mb-4 text-center md:text-left">
    About the Developer
  </h2>

  {/*  Developer Image goes here for sm, but side-by-side on md+ */}
  <div className="flex justify-center md:hidden mb-4">
    <img
      className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-xl object-cover"
      src={avatar_url}
      alt="user-img"
    />
  </div>

  <p className="text-sm md:text-base lg:text-lg mb-4 lg:mb-6 md:mb-4 text-center md:text-left">
    Hi! I'm Kadi Uday, a web developer passionate about building modern, responsive apps using React. This Swiggy clone was built as a project to practice API integration, component-based architecture, and responsive design.
  </p>

  <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-4 lg:mb-6 text-center md:text-left">
    About the Project
  </h2>
  <p className="text-sm md:text-base lg:text-lg md:text-[18px] text-center md:text-left">
    This is a clone of the Swiggy food delivery app built using React.js. It features routing, dynamic menu pages, and responsive UI using Tailwind CSS.
  </p>
</div>

{/*  Developer Image for md+ screens (hidden on sm) */}
<div className="hidden md:flex justify-center w-full md:w-1/4 mb-4 md:mb-0">
  <img
    className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-xl object-cover"
    src={avatar_url}
    alt="user-img"
  />
</div>


    </div>
  </div>

  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8 shadow-xl border-[2px] border-[#d7d7d7] rounded-xl p-6 max-w-5xl mx-auto text-black transition duration-100 ease-in-out transform hover:scale-100 hover:shadow-2xl cursor-pointer">
    <div className="flex-1 flex flex-col items-start w-full">
      <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 ">Tech Stack</h2>
      <ul className="list-disc ml-5 text-sm md:text-base lg:text-lg">
        <li>⚛️ React.js</li>
        <li>🎨 Tailwind CSS</li>
        <li>📦 Parcel Bundler</li>
        <li>🛠️ Custom Hooks & Routing</li>
      </ul>
    </div>
    <div className="flex-1 flex flex-col items-start w-full">
      <h2 className="text-xl md:text-2xl font-bold  mb-1 md:mb-2">Features</h2>
      <ul className="list-disc ml-3 md:ml-5 text-sm md:text-base lg:text-lg">
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