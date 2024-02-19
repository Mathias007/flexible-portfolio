import { render, screen } from "@testing-library/react";
import { AccountIntroduction } from "..";

import { socialModels } from "../../../models";
import { MemoryRouter } from "react-router-dom";

test("renders the AccountIntroduction component", () => {
    const mockedSocialData: socialModels.ISocialData[] = [
        { _id: 1, type: "facebook", link: "https://facebook.com" },
        { _id: 2, type: "twitter", link: "https://twitter.com" },
    ];

    render(
        <MemoryRouter>
            <AccountIntroduction socialData={mockedSocialData} />
        </MemoryRouter>
    );
    const accountIntroduction = screen.getByTestId("account-introduction");

    expect(accountIntroduction).toBeInTheDocument();

    const socialButtons = screen.getAllByTestId("account-social-button");

    expect(socialButtons.length).toBe(mockedSocialData.length);
});
