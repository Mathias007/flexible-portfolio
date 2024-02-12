import { FC } from "react";
import { ServicesItem } from ".";

import { servicesModels } from "../../models";

interface IServicesContentProps {
    services: servicesModels.IServicesData[];
}

const ServicesContent: FC<IServicesContentProps> = ({ services }) => {
    return (
        <div className="row" data-testid="services-content">
            {services.map((service) => (
                <ServicesItem
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                />
            ))}
        </div>
    );
};

export default ServicesContent;
