import { render, screen } from "@testing-library/react";
import { SkillsItem } from "..";

import { skillsModels } from "../../../models";

const mockSkillsData: skillsModels.ISkillsData = {
    _id: 1,
    skill: "Test Skill",
    value: 75,
};

test("renders the SkillsItem component correctly", () => {
    render(
        <SkillsItem
            _id={mockSkillsData._id}
            skill={mockSkillsData.skill}
            value={mockSkillsData.value}
            maxValue={100}
        />
    );
    const skillsItemElement = screen.getByTestId("skills-item");

    expect(skillsItemElement).toBeInTheDocument();

    const skillName = screen.getByText(mockSkillsData.skill);
    const skillValue = screen.getByText(`${mockSkillsData.value}%`);

    expect(skillName).toBeInTheDocument();
    expect(skillValue).toBeInTheDocument();
});
