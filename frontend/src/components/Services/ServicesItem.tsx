import { FC } from "react";

import { Icon } from "../general";

interface IServicesItemProps {
    title: string;
    description: string;
    technologies: string[];
    icon: string;
}

const ServicesItem: FC<IServicesItemProps> = ({
    title,
    description,
    icon,
    technologies,
}) => {
    return (
        <div className="service-item padd-15" data-testid="services-item">
            <div className="service-item-inner">
                <div className="icon" data-testid="services-item-icon">
                    <Icon type={icon} className="service-icon" />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <br />

                <p>
                    <strong className="service-stack">Stack: </strong>
                    {technologies.map((tech, index) => (
                        <span key={index}>
                            {tech}
                            {index < (technologies.length-1) ? ", " : "."}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default ServicesItem;
