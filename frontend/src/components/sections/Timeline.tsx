import { FC, useEffect, useState } from "react";

import { timelineModels } from "../../models";
import { ConfigVariables, ServerPaths } from "../../config";

import { TimelineSection, TimelineTitle } from "../Timeline";

const { SERVER_URL } = ConfigVariables;
const { API, TIMELINE } = ServerPaths;

const Timeline: FC = () => {
    const [educationTimelineData, setEducationTimelineData] = useState<timelineModels.ITimelineData[]>([]);
    const [experienceTimelineData, setExperienceTimelineData] = useState<timelineModels.ITimelineData[]>([]);

    useEffect(() => {
        const fetchTimelineData = async () => {
            try {
                const response = await fetch(`${SERVER_URL}${API}${TIMELINE}`);
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

        fetchTimelineData();
    }, []); 

    return (
        <section
            className="about section"
            id="timeline"
            data-testid="about-section"
        >
            <div className="container">
                <TimelineTitle />
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <TimelineSection
                                header="Education"
                                data={educationTimelineData}
                                className="education"
                            />
                            <TimelineSection
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

export default Timeline;
