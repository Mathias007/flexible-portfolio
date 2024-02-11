import { FC } from "react";

import { AccountSocialButton } from ".";

import { ISocialData } from "../../data/social.data";

interface IAccountIntroductionProps {
    socialData: ISocialData[];
}

const AccountIntroduction: FC<IAccountIntroductionProps> = ({ socialData }) => {
    return (
        <div className="left" data-testid="account-introduction">
            <span className="line"></span>
            <h2>
                I'm Tommy Angelo, <br /> a <span>digital designer</span>
            </h2>
            <p>web design tutorial using html & css</p>
            <a href="#" className="btn">
                contact
            </a>
            <div className="social-media">
                {socialData.map((social: ISocialData) => {
                    return (
                        <AccountSocialButton
                            key={social.id}
                            id={social.id}
                            type={social.type}
                            link={social.link}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AccountIntroduction;
