import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Test Cases for Contact Us Component", () => {
    
    // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

    test("Should load Contact Us Component" , () => {
        render(<Contact />);
        // Querying
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    });

    it("Should load a button inside Contact Us Component" , () => {
        render(<Contact />);
        // Querying
        const button = screen.getByText("Submit");
        // Assertion
        expect(button).toBeInTheDocument();
    });

    it("Should load a input inside Contact Us Component" , () => {
        render(<Contact />);
        // Querying
        const inputName = screen.getByPlaceholderText("Enter your name");
        // Assertion
        expect(inputName).toBeInTheDocument();
    });

    it("Should load two input boxes inside Contact Us Component", () => {
        render(<Contact />);
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
        // Assertion
        expect(inputBoxes.length).toBe(3);
    });
});

