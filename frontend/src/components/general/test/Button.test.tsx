import { render, screen } from "@testing-library/react";
import { Button } from "..";
import { IButton } from "../Button";

test("renders button with correct type, label, and class", () => {
    const buttonProps: IButton = {
        type: "submit",
        label: "Submit",
        className: "submit-button",
    };

    render(<Button {...buttonProps} />);

    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", buttonProps.type);
    expect(buttonElement).toHaveClass(buttonProps.className);
    expect(buttonElement.textContent).toBe(buttonProps.label);
});
