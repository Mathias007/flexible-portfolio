import { FC } from "react";
import { ServicesItem } from ".";

import { toolsModels } from "../../models";

interface IServicesContentProps {
    services: toolsModels.IToolsData[];
}

const ServicesContent: FC<IServicesContentProps> = ({ services }) => {
    return (
        <div className="row" data-testid="services-content">
            {services.map((service) => (
                <ServicesItem
                    key={service._id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    technologies={service.technologies}
                />
            ))}
        </div>
    );
};

export default ServicesContent;
