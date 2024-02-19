import { render, screen } from "@testing-library/react";
import { Services } from "..";
import { MemoryRouter } from "react-router-dom";

describe("Services component", () => {
    it("should render ServicesTitle and ServicesContent", () => {
        render(
            <MemoryRouter>
                <Services />
            </MemoryRouter>
        );

        const servicesTitle = screen.getByTestId("title");
        expect(servicesTitle).toBeInTheDocument();

        const servicesContent = screen.getByTestId("services-content");
        expect(servicesContent).toBeInTheDocument();
    });
});
