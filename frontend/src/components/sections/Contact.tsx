import { FC, useEffect, useState } from "react";

import {
    ContactSectionHeading,
    ContactInfo,
    ContactForm,
} from "../Contact";

import { contactModels } from "../../models";
import { contactData, headersData } from "../../data";

import { ConfigVariables, ServerPaths } from "../../config";
import { Title } from "../general";
const { SERVER_URL } = ConfigVariables;
const { API, CONTACT } = ServerPaths;

const Contact: FC = () => {
    const [contactInfoData, setContactInfoData] = useState<
        contactModels.IContactInfoData[]
    >([]);

    useEffect(() => {
        const fetchContactInfoData = async () => {
            try {
                const response = await fetch(`${SERVER_URL}${API}${CONTACT}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch contact info data");
                }
                const data = await response.json();
                setContactInfoData(data);
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
                <Title title={headersData.contactTitle} />
                <ContactSectionHeading
                    title={contactData.contactLinksTitle}
                    subtitle={contactData.contactLinksSubtitle}
                />
                <ContactInfo contactInfoData={contactInfoData} />
                <ContactSectionHeading
                    title={contactData.contactFormTitle}
                    subtitle={contactData.contactFormSubtitle}
                />
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
