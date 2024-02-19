import { FC } from "react";
import { ContactInfoItem } from ".";
import { contactModels } from "../../config/models";

interface IContactInfoPros {
    contactInfoData: contactModels.IContactInfoData[];
}

const ContactInfo: FC<IContactInfoPros> = ({ contactInfoData }) => {
    return (
        <div className="row" data-testid="contact-info">
            {contactInfoData.map((contact) => {
                return (
                    <ContactInfoItem
                        key={contact._id}
                        label={contact.label}
                        info={contact.info}
                        link={contact.link}
                        icon={contact.icon}
                    />
                );
            })}
        </div>
    );
};

export default ContactInfo;
