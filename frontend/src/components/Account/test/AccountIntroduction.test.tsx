import { render, screen } from "@testing-library/react";
import { AccountIntroduction } from "..";

import socialData from "../../../data/social.data";

test("renders the AccountIntroduction component", () => {
    render(<AccountIntroduction socialData={socialData} />);
    const accountIntroduction = screen.getByTestId("account-introduction");

    expect(accountIntroduction).toBeInTheDocument();

    const socialButtons = screen.getAllByTestId("account-social-button");

    expect(socialButtons.length).toBe(socialData.length);
});
