import { render, screen } from "@testing-library/react";
import { About } from "..";

test("renders the About component correctly", () => {
    render(<About />);
    const aboutSection = screen.getByTestId("about-section");

    expect(aboutSection).toBeInTheDocument();

    const aboutDescription = screen.getByTestId("about-description");
    const aboutPersonalInfo = screen.getByTestId("about-personal-info");
    const aboutSkills = screen.getByTestId("about-skills");
    const timelines = screen.getAllByTestId("about-timeline");

    expect(aboutDescription).toBeInTheDocument();
    expect(aboutPersonalInfo).toBeInTheDocument();
    expect(aboutSkills).toBeInTheDocument();
    expect(timelines.length).toBe(2);
});
