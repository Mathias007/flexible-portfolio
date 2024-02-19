import { render, screen } from "@testing-library/react";
import { About } from "..";
import { MemoryRouter } from "react-router-dom";

test("renders the About component correctly", () => {
    render(
        <MemoryRouter>
            <About />
        </MemoryRouter>
    );
    const aboutSection = screen.getByTestId("about-section");

    expect(aboutSection).toBeInTheDocument();

    const title = screen.getByTestId("title");
    const aboutDescription = screen.getByTestId("about-description");
    const aboutPersonalInfo = screen.getByTestId("about-personal-info");
    const aboutSkills = screen.getByTestId("about-skills");
    // const timelines = screen.getAllByTestId("about-timeline");

    expect(title).toBeInTheDocument();
    expect(aboutDescription).toBeInTheDocument();
    expect(aboutPersonalInfo).toBeInTheDocument();
    expect(aboutSkills).toBeInTheDocument();
    // expect(timelines.length).toBe(2);
});
