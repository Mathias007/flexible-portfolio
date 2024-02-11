import { FC } from "react";

import { Icon } from "../general";
import { ISocialData } from "../../data/social.data";

const AccountSocialButton: FC<ISocialData> = ({ type, link }) => {
    return (
        <a href={link} data-testid="account-social-button">
            <Icon type={type} className="social-media-icon" />
        </a>
    );
};

export default AccountSocialButton;
