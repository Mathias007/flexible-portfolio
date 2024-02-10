import { render, screen } from "@testing-library/react";

import { AccountSocialButton } from "..";
import { ISocialData } from "../../../data/social.data";

test("renders the AccountSocialButton component", () => {
    const mockedSocialData: ISocialData[] = [
        { id: 1, type: "facebook", link: "https://facebook.com" },
        { id: 2, type: "twitter", link: "https://twitter.com" },
    ];

    render(
        <AccountSocialButton
            id={mockedSocialData[0].id}
            type={mockedSocialData[0].type}
            link={mockedSocialData[0].link}
        />
    );
    const socialButton = screen.getByTestId("account-social-button");

    expect(socialButton).toBeInTheDocument();
});
