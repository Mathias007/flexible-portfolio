import { FC } from "react";

const ContactForm: FC = () => {
    return (
        <div className="row" data-testid="contact-form">
            <div className="contact-form padd-15">
                <div className="row">
                    <div className="form-item col-6 padd-15">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="form-item col-6 padd-15">
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-item col-12 padd-15">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-item col-12 padd-15">
                        <div className="form-group">
                            <textarea
                                name=""
                                className="form-control"
                                id=""
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-item col-12 padd-15">
                        <div className="form-group">
                            <button type="submit" className="btn">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
