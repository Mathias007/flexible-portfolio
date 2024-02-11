import { FC } from "react";

const AboutDescription: FC = () => {
    return (
        <div className="row" data-testid="about-description">
            <div className="about-text padd-15">
                <h3 data-testid="description-header">
                    I'm Mateusz Stawowski and{" "}
                    <span data-testid="description-span">Web Developer</span>
                </h3>
                <p data-testid="description-paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Necessitatibus, autem laudantium. Aut magnam, ipsa
                    voluptatum neque quia culpa rem et ipsum, iusto inventore
                    porro officiis quas architecto ex suscipit iure?
                </p>
            </div>
        </div>
    );
};

export default AboutDescription;
