import { FC } from "react";
import { skillsModels } from "../../config/models";
import { aboutData } from "../../config/data";

const SkillsItem: FC<skillsModels.ISkillsItemData> = ({
    skill,
    value,
    maxValue,
}) => {
    const valuePercentage = (value / maxValue) * 100;

    return (
        <div className="skill-item padd-15" data-testid="skills-item">
            <h5>{skill}</h5>
            <div className="progress">
                <div
                    className="progress-in"
                    style={{ width: `${valuePercentage}%` }}
                ></div>
                <div className="skill-percent">{value} {aboutData.skillsUnit}</div>
            </div>
        </div>
    );
};

export default SkillsItem;
