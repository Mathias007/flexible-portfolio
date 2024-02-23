import React, { FC, useEffect, useState, Suspense } from "react";

import { Loading, Title } from "../components/general";
// import { TimelineSection } from "../components/Timeline";

import { timelineModels } from "../config/models";
import { ConfigVariables, ServerPaths } from "../config/global";
import { headersData } from "../config/data";

const { SERVER_URL } = ConfigVariables;
const { API, TIMELINE } = ServerPaths;

const TimelineSection = React.lazy(
    () => import("../components/Timeline/TimelineSection")
);

const Timeline: FC = () => {
    const [educationTimelineData, setEducationTimelineData] = useState<
        timelineModels.ITimelineData[]
    >([]);
    const [experienceTimelineData, setExperienceTimelineData] = useState<
        timelineModels.ITimelineData[]
    >([]);

    useEffect(() => {
        const fetchTimelineData = async () => {
            try {
                const response = await fetch(`${SERVER_URL}${API}${TIMELINE}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch timeline data");
                }
                const data = await response.json();
                setEducationTimelineData(data.educationTimelineData);
                setExperienceTimelineData(data.experienceTimelineData);
            } catch (error) {
                console.error("Error fetching timeline data:", error);
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
                <Title title={headersData.timelineTitle} />
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <Suspense fallback={<Loading />}>
                                <TimelineSection
                                    header="Education"
                                    data={educationTimelineData}
                                    className="education"
                                />
                            </Suspense>
                            <Suspense fallback={<Loading />}>
                                <TimelineSection
                                    header="Experience"
                                    data={experienceTimelineData}
                                    className="experience"
                                />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
