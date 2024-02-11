import { FC } from "react";

import { Icon } from "../../general";

const RegisterForm: FC = () => {
    return (
        <div className="card-back" data-testid="register-form">
            <div className="center-wrap">
                <h4 className="heading">Sign Up</h4>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-style"
                        placeholder="Your Name"
                        autoComplete="off"
                        data-testid="name-input"
                    />
                    <Icon type="perm" className="input-icon" />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-style"
                        placeholder="Your Email"
                        autoComplete="off"
                        data-testid="email-input"
                    />
                    <Icon type="alt-email" className="input-icon" />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-style"
                        placeholder="Your Password"
                        autoComplete="off"
                        data-testid="password-input"
                    />
                    <Icon type="lock" className="input-icon" />
                </div>
                <a href="#" className="btn" data-testid="submit-button">
                    submit
                </a>
            </div>
        </div>
    );
};

export default RegisterForm;
