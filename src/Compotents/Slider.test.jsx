import Slider from "./Slider";
import { render, fireEvent, cleanup } from "@testing-library/react";



it("should be renter correctly", () => {
    render(<Slider></Slider>);
});


it("should be render with proper label", () => {
    const { getByTestId, debug } = render(<Slider />);
    const button = getByTestId("button");
    expect(button).toHaveTextContent("Next");
});

it("should be render with proper label", () => {
    const { getByTestId, debug } = render(<Slider />);
    const button2 = getByTestId("button2");
    expect(button2).toHaveTextContent("Previous");
});

it("should be render with fire event onClick Next", () => {
    const { getByTestId, debug } = render(<Slider />);
    const button = getByTestId("button");
    fireEvent.click(button);
    const queValue = getByTestId("page");
    expect(queValue).toHaveTextContent(2);
});

it("should be renter with fire event onClick Previous", () => {
    const { getByTestId, debug } = render(<Slider />);
    const button2 = getByTestId("button2");
    fireEvent.click(button2);
    const queValue = getByTestId("page");
    expect(queValue).toHaveTextContent(1);
});

it("Question should have default value as 1", () => {
    const { getByTestId, debug } = render(<Slider />);
    debug();
    const queValue = getByTestId("page");
    expect(queValue).toHaveTextContent(1);
})

