import { FC } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../general";
import { socialModels } from "../../models";

const AccountSocialButton: FC<socialModels.ISocialData> = ({ type, link }) => {
    return (
        <Link to={link} target="_blank" data-testid="account-social-button">
            <Icon type={type} className="social-media-icon" />
        </Link>
    );
};

export default AccountSocialButton;
