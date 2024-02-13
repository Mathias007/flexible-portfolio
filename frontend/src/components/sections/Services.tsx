import { FC, useEffect, useState } from "react";

import { ServicesTitle, ServicesContent } from "../Services";
import { toolsModels } from "../../models";

const Services: FC = () => {
    const [servicesData, setSocialData] = useState<toolsModels.IToolsData[]>([]);

    useEffect(() => {
        const fetchServicesData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/tools");
                if (!response.ok) {
                    throw new Error("Failed to fetch services data");
                }
                const data = await response.json();
                setSocialData(data);
            } catch (error) {
                console.error("Error fetching services data:", error);
            }
        };

        fetchServicesData();
    }, []);
    
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
