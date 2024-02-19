import { ChangeEvent, FC, FormEvent, useState } from "react";
import { send } from "emailjs-com";

import { ConfigVariables } from "../../config/global";
import { contactData } from "../../config/data";
import { Button, FormField } from "../general";

const { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID } = ConfigVariables;

const ContactForm: FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        topic: "",
        message: "",
    });

    const [formMessage, setFormMessage] = useState<string>("");

    const resetContactForm = () => {
        setFormData({
            name: "",
            email: "",
            topic: "",
            message: "",
        });
    };

    const sendContactForm = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (
            formData.name &&
            formData.email &&
            formData.topic &&
            formData.message
        ) {
            setFormMessage(contactData.contactFormLoadingMessage);
            send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formData, EMAIL_USER_ID)
                .then((response) => {
                    console.log(
                        contactData.contactFormSuccessMessage,
                        response.status,
                        response.text
                    );
                    resetContactForm();
                    setFormMessage(contactData.contactFormSuccessMessage);
                })
                .catch((error) => {
                    console.error(contactData.contactFormFailedMessage, error);
                    setFormMessage(contactData.contactFormFailedMessage);
                });
        } else {
            setFormMessage(contactData.contactFormEmptyMessage);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <form
            className="row"
            data-testid="contact-form"
            onSubmit={sendContactForm}
        >
            <div className="contact-form padd-15">
                <div className="row">
                    <div className="form-item col-6 padd-15">
                        <div className="form-group">
                            <FormField
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-item col-6 padd-15">
                        <div className="form-group">
                            <FormField
                                id="email"
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-item col-12 padd-15">
                        <div className="form-group">
                            <FormField
                                id="topic"
                                name="topic"
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                value={formData.topic}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-item col-12 padd-15">
                        <div className="form-group">
                            <FormField
                                id="message"
                                name="message"
                                className="form-control"
                                type="textarea"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-item col-12 padd-15">
                        <div className="form-group footer">
                            <Button
                                type="submit"
                                className="btn"
                                label={contactData.contactFormButtonLabel}
                            />
                            {formMessage ? (
                                <p className="form-error">{formMessage}</p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
