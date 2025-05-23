import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render a Header Component with a login button", () => { 
    render(
    <BrowserRouter>  {/*for <Link> tag we need to use <BrowserRouter> because link tag comes from react-router-dom. */}
        <Provider store={ appStore} >   {/* we are using redux. so we need to provide the config by using <Provider> with appStore*/}
            <Header />
        </Provider>
    </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should render a Header Component with (0 items) ", () => { 
    render(
    <BrowserRouter >
        <Provider store={ appStore} >
            <Header />
        </Provider>
    </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    const cartItems = screen.getByText("(0 items)");
    expect(cartItems).toBeInTheDocument();
});

it("Should render a Header Component with items ", () => { 
    render(
    <BrowserRouter > 
        <Provider store={ appStore} > 
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const rejexCartItems = screen.getByText(/items/); 
    // /.../ is called as rejex. With rejex we don't need to pass exact string. it will match accordingly.
    expect(rejexCartItems).toBeInTheDocument();
});

it("Should change Login button to Logout button on click", () => { 
    render(
    <BrowserRouter>  
        <Provider store={ appStore} >  
            <Header />
        </Provider>
    </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton); // we can fire the click event using fireEvent.

    const logoutButton = screen.getByRole("button", {name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
});
