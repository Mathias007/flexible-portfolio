import { FC } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../general";

interface IContactInfoItemProps {
    label: string;
    info: string;
    link?: string;
    icon: string;
}

const ContactInfoItem: FC<IContactInfoItemProps> = ({
    label,
    info,
    link,
    icon,
}) => {
    return (
        <Link to={link || ""} target={link ? "_blank" : ""}>
            <div
                className="contact-info-item padd-15"
                data-testid="contact-info-item"
            >
                <div className="icon" data-testid="contact-icon">
                    <Icon type={icon} className="contact-icon" />
                </div>
                <h4>{label}</h4>
                <p>{info}</p>
            </div>
        </Link>
    );
};

export default ContactInfoItem;
