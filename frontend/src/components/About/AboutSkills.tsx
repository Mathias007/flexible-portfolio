import { FC } from "react";

import { SkillsItem } from ".";

import { skillsModels } from "../../config/models";

interface IAboutSkills {
    skillsData: skillsModels.ISkillsData[];
}

const AboutSkills: FC<IAboutSkills> = ({ skillsData }) => {
    const actualYear = new Date().getFullYear();
    const maxValue = skillsData.reduce(function (maxValue, currentValue) {
        return Math.max(maxValue, actualYear - currentValue.value);
    }, -Infinity);

    return (
        <div className="skills padd-15" data-testid="about-skills">
            <div className="row">
                {skillsData.map((data: skillsModels.ISkillsData) => {
                    const experienceInYears = actualYear - data.value;

                    return (
                        <SkillsItem
                            key={data._id}
                            _id={data._id}
                            skill={data.skill}
                            value={experienceInYears}
                            maxValue={maxValue}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AboutSkills;
