import { render, screen } from "@testing-library/react";
import { Account } from "..";
import { MemoryRouter } from "react-router-dom";

test("renders the Account component", () => {
    render(
        <MemoryRouter>
            <Account />
        </MemoryRouter>
    );
    const accountSection = screen.getByTestId("account-section");

    expect(accountSection).toBeInTheDocument();

    const introduction = screen.getByTestId("account-introduction");
    const form = screen.getByTestId("account-form");

    expect(introduction).toBeInTheDocument();
    expect(form).toBeInTheDocument();
});
