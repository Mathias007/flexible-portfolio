import { FC } from "react";

import {
    AboutTitle,
    AboutDescription,
    AboutPersonalInfo,
    AboutSkills,
    AboutTimeline,
} from "../About";

import {
    educationTimelineData,
    experienceTimelineData,
} from "../../data/timeline.data";

const About: FC = () => {
    return (
        <section
            className="about section"
            id="about"
            data-testid="about-section"
        >
            <div className="container">
                <AboutTitle />
                <div className="row">
                    <div className="about-content padd-15">
                        <AboutDescription />
                        <div className="row">
                            <AboutPersonalInfo />
                            <AboutSkills />
                        </div>
                        <div className="row">
                            <AboutTimeline
                                header="Education"
                                data={educationTimelineData}
                                className="education"
                            />
                            <AboutTimeline
                                header="Experience"
                                data={experienceTimelineData}
                                className="experience"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
