import { render, screen } from "@testing-library/react";
import { AboutSkills } from "..";
import { skillsModels } from "../../../models";

test("renders the AboutSkills component correctly", () => {
    const skillsData: skillsModels.ISkillsData[] = [
        { _id: 1, skill: "Skill 1", value: 2010 },
        { _id: 2, skill: "Skill 2", value: 2015 },
    ];

    render(<AboutSkills skillsData={skillsData} />);

    const aboutSkillsElement = screen.getByTestId("about-skills");
    expect(aboutSkillsElement).toBeInTheDocument();

    const skillsItems = screen.getAllByTestId("skills-item");

    expect(skillsItems.length).toBeGreaterThan(0);
});
