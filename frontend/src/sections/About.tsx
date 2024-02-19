import { FC, useEffect, useState } from "react";

import { Title } from "../components/general";
import {
    AboutDescription,
    AboutPersonalInfo,
    AboutSkills,
} from "../components/About";

import { personalModels, skillsModels } from "../config/models";
import { ConfigVariables, ServerPaths } from "../config/global";
import { headersData } from "../config/data";

const { SERVER_URL } = ConfigVariables;
const { API, PERSONAL, SKILLS } = ServerPaths;

const About: FC = () => {
    const [personalData, setPersonalData] = useState<personalModels.IPersonalData[]>([]);
    const [skillsData, setSkillsData] = useState<skillsModels.ISkillsData[]>([]);

    useEffect(() => {
        const fetchPersonalData = async () => {
            try {
                const response = await fetch(`${SERVER_URL}${API}${PERSONAL}`);
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
                const response = await fetch(`${SERVER_URL}${API}${SKILLS}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch skills data');
                }
                const data = await response.json();
                setSkillsData(data);

            } catch (error) {
                console.error('Error fetching skills data:', error);
            }
        };

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
                <Title title={headersData.aboutTitle} />
                <div className="row">
                    <div className="about-content padd-15">
                        <AboutDescription />
                        <div className="row">
                            <AboutPersonalInfo personalData={personalData} />
                            <AboutSkills skillsData={skillsData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
