import { render, screen } from "@testing-library/react";

import { AccountSocialButton } from "..";
import { socialModels } from "../../../models";
import { MemoryRouter } from "react-router-dom";

test("renders the AccountSocialButton component", () => {
    const mockedSocialData: socialModels.ISocialData[] = [
        { _id: 1, type: "facebook", link: "https://facebook.com" },
        { _id: 2, type: "twitter", link: "https://twitter.com" },
    ];

    render(
        <MemoryRouter>
            <AccountSocialButton
                _id={mockedSocialData[0]._id}
                type={mockedSocialData[0].type}
                link={mockedSocialData[0].link}
            />
        </MemoryRouter>
    );
    const socialButton = screen.getByTestId("account-social-button");

    expect(socialButton).toBeInTheDocument();
});
