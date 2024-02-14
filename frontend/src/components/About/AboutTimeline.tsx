import { FC } from "react";

import { TimelineItem } from ".";
import { timelineModels } from "../../models";

interface IAboutTimelineProps {
    header: string;
    data: timelineModels.ITimelineData[];
    className: string;
}

const AboutTimeline: FC<IAboutTimelineProps> = ({
    header,
    data,
    className,
}) => {
    return (
        <div className={`${className} padd-15`} data-testid="about-timeline">
            <h3 className="title" data-testid="timeline-header">
                {header}
            </h3>
            <div className="row">
                <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                        {data.map((timeline: timelineModels.ITimelineData) => {
                            return (
                                <TimelineItem
                                    key={timeline._id}
                                    _id={timeline._id}
                                    title={timeline.title}
                                    type={timeline.type}
                                    description={timeline.description}
                                    icon={timeline.icon}
                                    date={timeline.date}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTimeline;
