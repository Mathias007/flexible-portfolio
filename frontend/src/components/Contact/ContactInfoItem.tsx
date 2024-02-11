import { FC } from "react";
import { Icon } from "../general";

interface IContactInfoItemProps {
    label: string;
    info: string;
    icon: string;
}

const ContactInfoItem: FC<IContactInfoItemProps> = ({ label, info, icon }) => {
    return (
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
    );
};

export default ContactInfoItem;
