import { FC, useEffect, useState } from "react";

import {
    ContactSectionHeading,
    ContactInfo,
    ContactForm,
    ContactTitle,
} from "../Contact";

import { contactModels } from "../../models";

const Contact: FC = () => {
    const [contactInfoData, setSocialData] = useState<contactModels.IContactInfoData[]>([]);

    useEffect(() => {
        const fetchContactInfoData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/contact");
                if (!response.ok) {
                    throw new Error("Failed to fetch contact info data");
                }
                const data = await response.json();
                setSocialData(data);
            } catch (error) {
                console.error("Error fetching contact info data:", error);
            }
        };

        fetchContactInfoData();
    }, []);

    return (
        <section
            className="contact section"
            id="contact"
            data-testid="contact-section"
        >
            <div className="container">
                <ContactTitle />
                <ContactSectionHeading
                    title="Have You Any Questions?"
                    subtitle="I'M AT YOUR SERVICES"
                />
                <ContactInfo contactInfoData={contactInfoData} />
                <ContactSectionHeading
                    title="SEND ME AN EMAIL"
                    subtitle="I'M OPEN TO MESSAGES"
                />
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
