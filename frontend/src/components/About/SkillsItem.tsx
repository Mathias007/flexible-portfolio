import { FC } from "react";
import { ISkillsData } from "../../data/skills.data";

const SkillsItem: FC<ISkillsData> = ({ skill, value }) => {
    return (
        <div className="skill-item padd-15" data-testid="skills-item">
            <h5>{skill}</h5>
            <div className="progress">
                <div
                    className="progress-in"
                    style={{ width: `${value}%` }}
                ></div>
                <div className="skill-percent">{value}%</div>
            </div>
        </div>
    );
};

export default SkillsItem;
