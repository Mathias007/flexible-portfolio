import { FC } from "react";
import { ContactInfoItem } from ".";
import { IContactInfoData } from "../../data/contact.data";

interface IContactInfoPros {
    contactInfoData: IContactInfoData[];
}

const ContactInfo: FC<IContactInfoPros> = ({ contactInfoData }) => {
    return (
        <div className="row" data-testid="contact-info">
            {contactInfoData.map((contact) => {
                return (
                    <ContactInfoItem
                        key={contact.id}
                        label={contact.label}
                        info={contact.info}
                        icon={contact.icon}
                    />
                );
            })}
        </div>
    );
};

export default ContactInfo;
