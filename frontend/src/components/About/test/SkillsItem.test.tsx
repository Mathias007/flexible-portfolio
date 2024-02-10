import { render, screen } from "@testing-library/react";
import { SkillsItem } from "..";

import { ISkillsData } from "../../../data/skills.data";

const mockSkillsData: ISkillsData = {
    id: 1,
    skill: "Test Skill",
    value: 75,
};

test("renders the SkillsItem component correctly", () => {
    render(
        <SkillsItem
            id={mockSkillsData.id}
            skill={mockSkillsData.skill}
            value={mockSkillsData.value}
        />
    );
    const skillsItemElement = screen.getByTestId("skills-item");

    expect(skillsItemElement).toBeInTheDocument();

    const skillName = screen.getByText(mockSkillsData.skill);
    const skillValue = screen.getByText(`${mockSkillsData.value}%`);

    expect(skillName).toBeInTheDocument();
    expect(skillValue).toBeInTheDocument();
});
