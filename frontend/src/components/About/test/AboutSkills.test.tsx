import { render, screen } from "@testing-library/react";
import { AboutSkills } from "..";

test("renders the AboutSkills component correctly", () => {
    render(<AboutSkills />);

    const aboutSkillsElement = screen.getByTestId("about-skills");
    expect(aboutSkillsElement).toBeInTheDocument();

    const skillsItems = screen.getAllByTestId("skills-item");

    expect(skillsItems.length).toBeGreaterThan(0);
});
