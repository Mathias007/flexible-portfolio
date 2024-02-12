import { FC } from "react";

import { Icon } from "../general";
import { timelineModels } from "../../models";

const TimelineItem: FC<timelineModels.ITimelineData> = ({
    title,
    description,
    icon,
    date,
}) => {
    return (
        <div className="timeline-item" data-testid="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-date" data-testid="timeline-date">
                <Icon type={icon} className="timeline-icon" /> {date}
            </h3>
            <h4 className="timeline-title">{title}</h4>
            <p className="timeline-text">{description}</p>
        </div>
    );
};

export default TimelineItem;
