import { FC } from "react";

import { personalData } from "../../data";
import { RoutesPaths } from "../../config";
const { RESUME } = RoutesPaths;
const { downloadButtonLabel, contactButtonLabel } = personalData;

const PersonalInfoButtons: FC = () => {
    return (
        <div className="buttons padd-15" data-testid="personal-info-buttons">
            <a href={RESUME} download="resume.pdf" className="btn">
                {downloadButtonLabel}
            </a>
            <a href="#contact" className="btn hire-me">
                {contactButtonLabel}
            </a>
        </div>
    );
};

export default PersonalInfoButtons;
