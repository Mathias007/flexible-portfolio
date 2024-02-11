import { render, screen } from "@testing-library/react";
import { Account } from "..";

test("renders the Account component", () => {
    render(<Account />);
    const accountSection = screen.getByTestId("account-section");

    expect(accountSection).toBeInTheDocument();

    const introduction = screen.getByTestId("account-introduction");
    const form = screen.getByTestId("account-form");

    expect(introduction).toBeInTheDocument();
    expect(form).toBeInTheDocument();
});
