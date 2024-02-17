import { FC } from "react";
import { Link } from "react-router-dom";

interface IPersonalInfoItemProps {
    label: string;
    value: string;
    link?: string;
}

const PersonalInfoItem: FC<IPersonalInfoItemProps> = ({
    label,
    value,
    link,
}) => {
    const PersonalValue = () => <span>{value}</span>;

    return (
        <div className="info-item padd-15" data-testid="personal-info-item">
            <p>
                {label}:
                {link ? (
                    <Link to={link} target="_blank">
                        <PersonalValue />
                    </Link>
                ) : (
                    <PersonalValue />
                )}
            </p>
        </div>
    );
};

export default PersonalInfoItem;
