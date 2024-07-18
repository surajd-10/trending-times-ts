import Home from ".";
import { render, screen } from "@testing-library/react";

describe("Home",()=>{
    test("render heading", ()=>{
        render(<Home/>)
        const headerElement = screen.getByText("NY Times Most Popular Articles");
        expect(headerElement).toBeInTheDocument();
    })
})