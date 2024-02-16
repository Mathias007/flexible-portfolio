import { FC } from "react";

import { headersData } from "../../data";
const { aboutTitle } = headersData;

const AboutTitle: FC = () => {
    return (
        <div className="row" data-testid="about-title">
            <div className="section-title padd-15">
                <h2>{aboutTitle}</h2>
            </div>
        </div>
    );
};

export default AboutTitle;

