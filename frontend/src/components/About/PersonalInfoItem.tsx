import { FC } from "react";

interface IPersonalInfoItemProps {
    label: string;
    value: string;
}

const PersonalInfoItem: FC<IPersonalInfoItemProps> = ({ label, value }) => {
    return (
        <div className="info-item padd-15" data-testid="personal-info-item">
            <p>
                {label}: <span>{value}</span>
            </p>
        </div>
    );
};

export default PersonalInfoItem;
