import { FC } from "react";

const NavigationLogo: FC = () => {
    return (
        <div className="logo" data-testid="navigation-logo">
            <a href="#">
                <span>M</span>athias
            </a>
        </div>
    );
};

export default NavigationLogo;
