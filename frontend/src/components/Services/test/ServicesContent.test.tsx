import { render, screen } from "@testing-library/react";
import { ServicesContent } from "..";

import { servicesModels } from "../../../models";

const sampleServicesData: servicesModels.IServicesData[] = [
    {
        id: 1,
        title: "Service 1",
        description: "Description 1",
        icon: "icon-1",
    },
    {
        id: 2,
        title: "Service 2",
        description: "Description 2",
        icon: "icon-2",
    },
    {
        id: 3,
        title: "Service 3",
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
