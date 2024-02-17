import { render, screen } from "@testing-library/react";

import { AccountSocialButton } from "..";
import { socialModels } from "../../../models";

test("renders the AccountSocialButton component", () => {
    const mockedSocialData: socialModels.ISocialData[] = [
        { _id: 1, type: "facebook", link: "https://facebook.com" },
        { _id: 2, type: "twitter", link: "https://twitter.com" },
    ];

    render(
        <AccountSocialButton
            _id={mockedSocialData[0]._id}
            type={mockedSocialData[0].type}
            link={mockedSocialData[0].link}
        />
    );
    const socialButton = screen.getByTestId("account-social-button");

    expect(socialButton).toBeInTheDocument();
});
