import { FC } from "react";

import personalData from "../../data/personal.data";

import { PersonalInfoButtons, PersonalInfoItem } from ".";

const AboutPersonalInfo: FC = () => {
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
