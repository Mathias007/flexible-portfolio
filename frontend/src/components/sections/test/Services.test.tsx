import { render, screen } from "@testing-library/react";
import { Services } from "..";

describe("Services component", () => {
    it("should render ServicesTitle and ServicesContent", () => {
        render(<Services />);

        const servicesTitle = screen.getByTestId("services-title");
        expect(servicesTitle).toBeInTheDocument();

        const servicesContent = screen.getByTestId("services-content");
        expect(servicesContent).toBeInTheDocument();
    });
});
