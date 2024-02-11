import { FC } from "react";

import { AccountForm, AccountIntroduction } from "../Account";

import socialData from "../../data/social.data";

const Account: FC = () => {
    return (
        <section
            className="account section"
            id="account"
            data-testid="account-section"
        >
            <div className="container">
                <div className="row full-screen align-items-center">
                    <AccountIntroduction socialData={socialData} />
                    <AccountForm />
                </div>
            </div>
        </section>
    );
};

export default Account;
