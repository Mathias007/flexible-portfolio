import { FC } from "react";

import { LoginForm, RegisterForm } from "./forms";

const AccountForm: FC = () => {
    return (
        <div className="right" data-testid="account-form">
            <div className="form">
                <div className="text-center">
                    <h6>
                        <span>Log In</span> <span>Sign Up</span>
                    </h6>
                    <input type="checkbox" className="checkbox" id="reg-log" />
                    <label htmlFor="reg-log"></label>
                    <div className="card-3d-wrap">
                        <div className="card-3d-wrapper">
                            <LoginForm />
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountForm;
