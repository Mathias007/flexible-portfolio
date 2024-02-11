import { FC } from "react";

const PersonalInfoButtons: FC = () => {
    return (
        <div className="buttons padd-15" data-testid="personal-info-buttons">
            <a href="#" className="btn">
                Download CV
            </a>
            <a href="#contact" className="btn hire-me">
                Hire Me
            </a>
        </div>
    );
};

export default PersonalInfoButtons;
