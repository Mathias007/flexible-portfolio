import { FC } from "react";
import { Link } from "react-router-dom";

import { personalData } from "../../config/data";
import { RoutesPaths } from "../../config/global";
const { RESUME, CONTACT } = RoutesPaths;
const { downloadButtonLabel, contactButtonLabel } = personalData;

const PersonalInfoButtons: FC = () => {
    return (
        <div className="buttons padd-15" data-testid="personal-info-buttons">
            <a href={RESUME} download="resume.pdf" className="btn">
                {downloadButtonLabel}
            </a>
            <Link to={`/${CONTACT}`} className="btn hire-me">
                {contactButtonLabel}
            </Link>
        </div>
    );
};

export default PersonalInfoButtons;
