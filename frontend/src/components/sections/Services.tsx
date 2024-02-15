import { FC, useEffect, useState } from "react";

import { ServicesTitle, ServicesContent } from "../Services";
import { toolsModels } from "../../models";

import { ConfigVariables, ServerPaths } from "../../config";
const { SERVER_URL } = ConfigVariables;
const { API, TOOLS } = ServerPaths;

const Services: FC = () => {
    const [servicesData, setServicesData] = useState<toolsModels.IToolsData[]>([]);

    useEffect(() => {
        const fetchServicesData = async () => {
            try {
                const response = await fetch(`${SERVER_URL}${API}${TOOLS}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch tools data");
                }
                const data = await response.json();
                setServicesData(data);
            } catch (error) {
                console.error("Error fetching tools data:", error);
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
