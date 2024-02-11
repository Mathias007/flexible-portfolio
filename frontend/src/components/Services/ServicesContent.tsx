import { FC } from "react";
import { ServicesItem } from ".";

import { IServicesData } from "../../data/services.data";

interface IServicesContentProps {
    services: IServicesData[];
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
