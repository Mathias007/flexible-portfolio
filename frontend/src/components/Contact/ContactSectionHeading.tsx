import { FC } from "react";

interface IContactSectionHeadingProps {
    title: string;
    subtitle: string;
}

const ContactSectionHeading: FC<IContactSectionHeadingProps> = ({
    title,
    subtitle,
}) => {
    return (
        <>
            <h3 className="contact-title padd-15" data-testid="contact-main-title">{title}</h3>
            <h4 className="contact-sub-title padd-15" data-testid="contact-subtitle">{subtitle}</h4>
        </>
    );
};

export default ContactSectionHeading;
