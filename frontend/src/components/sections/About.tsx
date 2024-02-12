import { FC, useEffect, useState } from "react";

import {
    AboutTitle,
    AboutDescription,
    AboutPersonalInfo,
    AboutSkills,
    AboutTimeline,
} from "../About";

import { timelineModels, personalModels, skillsModels } from "../../models";

const About: FC = () => {
    const [educationTimelineData, setEducationTimelineData] = useState<timelineModels.ITimelineData[]>([]);
    const [experienceTimelineData, setExperienceTimelineData] = useState<timelineModels.ITimelineData[]>([]);
    const [personalData, setPersonalData] = useState<personalModels.IPersonalData[]>([]);
    const [skillsData, setSkillsData] = useState<skillsModels.ISkillsData[]>([]);

    useEffect(() => {
        const fetchTimelineData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/timeline');
                if (!response.ok) {
                    throw new Error('Failed to fetch timeline data');
                }
                const data = await response.json();
                setEducationTimelineData(data.educationTimelineData);
                setExperienceTimelineData(data.experienceTimelineData);

            } catch (error) {
                console.error('Error fetching timeline data:', error);
            }
        };

        const fetchPersonalData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/personal');
                if (!response.ok) {
                    throw new Error('Failed to fetch personal data');
                }
                const data = await response.json();
                setPersonalData(data);

            } catch (error) {
                console.error('Error fetching personal data:', error);
            }
        };

        const fetchSkillsData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/skills');
                if (!response.ok) {
                    throw new Error('Failed to fetch skills data');
                }
                const data = await response.json();
                setSkillsData(data);

            } catch (error) {
                console.error('Error fetching skills data:', error);
            }
        };

        fetchTimelineData();
        fetchPersonalData();
        fetchSkillsData();
    }, []); 

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
                            <AboutPersonalInfo personalData={personalData} />
                            <AboutSkills skillsData={skillsData} />
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
