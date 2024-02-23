import React, { FC, Suspense } from "react";
import { Loading } from "../general";

import { toolsModels } from "../../config/models";

const ServicesItem = React.lazy(() => import("./ServicesItem"));

interface IServicesContentProps {
    services: toolsModels.IToolsData[];
}

const ServicesContent: FC<IServicesContentProps> = ({ services }) => {
    return (
        <div className="row" data-testid="services-content">
            {services.map((service) => (
                <Suspense fallback={<Loading />}>
                    <ServicesItem
                        key={service._id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        technologies={service.technologies}
                    />
                </Suspense>
            ))}
        </div>
    );
};

export default ServicesContent;
