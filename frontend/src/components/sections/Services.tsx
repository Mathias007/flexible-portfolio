import { FC } from "react";

import { ServicesTitle, ServicesContent } from "../Services";

import servicesData from "../../data/services.data";

const Services: FC = () => {
    return (
        <section className="service section" id="services">
            <div className="container">
                <ServicesTitle />
                <ServicesContent services={servicesData} />
            </div>
        </section>
    );
};

export default Services;
