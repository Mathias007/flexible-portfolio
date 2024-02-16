import { FC } from "react";

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
                    <a href={link} target="_blank">
                        <PersonalValue />
                    </a>
                ) : (
                    <PersonalValue />
                )}
            </p>
        </div>
    );
};

export default PersonalInfoItem;
