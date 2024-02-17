import { render, screen } from "@testing-library/react";
import { AboutSkills } from "..";
import { skillsModels } from "../../../models";

test("renders the AboutSkills component correctly", () => {
    render(<AboutSkills skillsData={{} as skillsModels.ISkillsData[]} />);

    const aboutSkillsElement = screen.getByTestId("about-skills");
    expect(aboutSkillsElement).toBeInTheDocument();

    const skillsItems = screen.getAllByTestId("skills-item");

    expect(skillsItems.length).toBeGreaterThan(0);
});
