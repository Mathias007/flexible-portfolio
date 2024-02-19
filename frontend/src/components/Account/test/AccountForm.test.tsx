import { render, screen } from "@testing-library/react";
import { AccountForm } from "..";
import { MemoryRouter } from "react-router-dom";

test("renders the AccountForm component", () => {
    render(
        <MemoryRouter>
            <AccountForm />
        </MemoryRouter>
    );
    const accountForm = screen.getByTestId("account-form");

    expect(accountForm).toBeInTheDocument();

    const loginForm = screen.getByTestId("login-form");
    const registerForm = screen.getByTestId("register-form");

    expect(loginForm).toBeInTheDocument();
    expect(registerForm).toBeInTheDocument();
});
