import { FC } from "react";
import { ContactInfoItem } from ".";
import { contactModels } from "../../models";

interface IContactInfoPros {
    contactInfoData: contactModels.IContactInfoData[];
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
