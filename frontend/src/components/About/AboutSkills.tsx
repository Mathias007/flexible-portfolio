import { FC } from "react";

import { SkillsItem } from ".";

import { skillsModels } from "../../models";

interface IAboutSkills {
    skillsData: skillsModels.ISkillsData[];
}

const AboutSkills: FC<IAboutSkills> = ({ skillsData }) => {
    return (
        <div className="skills padd-15" data-testid="about-skills">
            <div className="row">
                {skillsData.map((data: skillsModels.ISkillsData) => {
                    return (
                        <SkillsItem
                            key={data.id}
                            id={data.id}
                            skill={data.skill}
                            value={data.value}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AboutSkills;
