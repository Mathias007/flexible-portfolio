import { FC } from "react";

import {
    ContactSectionHeading,
    ContactInfo,
    ContactForm,
    ContactTitle,
} from "../Contact";

import contactInfoData from "../../data/contact.data";

const Contact: FC = () => {
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
