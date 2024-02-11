import { FC } from "react";

import { SkillsItem } from ".";

import skillsData, { ISkillsData } from "../../data/skills.data";

const AboutSkills: FC = () => {
    return (
        <div className="skills padd-15" data-testid="about-skills">
            <div className="row">
                {skillsData.map((data: ISkillsData) => {
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
