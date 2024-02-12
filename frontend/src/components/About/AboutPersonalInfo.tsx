import { FC } from "react";

import { personalModels } from "../../models";

import { PersonalInfoButtons, PersonalInfoItem } from ".";

interface IAboutPersonalInfo {
    personalData: personalModels.IPersonalData[];
}

const AboutPersonalInfo: FC<IAboutPersonalInfo> = ({ personalData }) => {
    return (
        <div
            className="personal-info padd-15"
            data-testid="about-personal-info"
        >
            <div className="row">
                {personalData.map((info) => {
                    return (
                        <PersonalInfoItem
                            key={info.id}
                            label={info.label}
                            value={info.value}
                        />
                    );
                })}
            </div>
            <div className="row">
                <PersonalInfoButtons />
            </div>
        </div>
    );
};

export default AboutPersonalInfo;
