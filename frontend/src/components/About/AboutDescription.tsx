import { FC } from "react";
import { aboutData } from "../../config/data";

const AboutDescription: FC = () => {
    return (
        <div className="row" data-testid="about-description">
            <div className="about-text padd-15">
                <h3 data-testid="description-header">
                    <span data-testid="description-span">
                        {aboutData.aboutHeaderBold}
                    </span>
                    {aboutData.aboutHeaderText}
                </h3>
                {aboutData.aboutDescription.map((paragraph, index) => (
                    <p key={index} data-testid="description-paragraph">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default AboutDescription;
