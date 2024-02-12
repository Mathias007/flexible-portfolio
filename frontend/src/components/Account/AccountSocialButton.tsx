import { FC } from "react";

import { Icon } from "../general";
import { socialModels } from "../../models";

const AccountSocialButton: FC<socialModels.ISocialData> = ({ type, link }) => {
    return (
        <a href={link} data-testid="account-social-button">
            <Icon type={type} className="social-media-icon" />
        </a>
    );
};

export default AccountSocialButton;
