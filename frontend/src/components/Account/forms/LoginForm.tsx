import { FC } from "react";

import { Icon } from "../../general";

const LoginForm: FC = () => {
    return (
        <div className="card-front" data-testid="login-form">
            <div className="center-wrap">
                <h4 className="heading">Log In</h4>
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
                <p className="text-center">
                    <a href="#" className="link">
                        Forgot your password?
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
