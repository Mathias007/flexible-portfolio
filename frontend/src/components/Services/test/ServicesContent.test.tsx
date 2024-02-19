import { render, screen } from "@testing-library/react";
import { ServicesContent } from "..";

import { toolsModels } from "../../../config/models";

const sampleServicesData: toolsModels.IToolsData[] = [
    {
        _id: 1,
        title: "Service 1",
        description: "Description 1",
        technologies: ["first", "second"],
        icon: "icon-1",
    },
    {
        _id: 2,
        title: "Service 2",
        description: "Description 2",
        technologies: ["first", "second"],
        icon: "icon-2",
    },
    {
        _id: 3,
        title: "Service 3",
        technologies: ["first", "second"],
        description: "Description 3",
        icon: "icon-3",
    },
];

test("renders ServicesContent component with correct number of ServicesItem", () => {
    render(<ServicesContent services={sampleServicesData} />);
    const servicesItemElements = screen.getAllByTestId("services-item");

    servicesItemElements.forEach((element) => {
        expect(element).toBeInTheDocument();
    });

    expect(servicesItemElements).toHaveLength(sampleServicesData.length);
});
