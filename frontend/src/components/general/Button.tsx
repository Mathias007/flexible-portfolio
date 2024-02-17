import { FC } from "react";

interface IButton {
    type: "submit" | "reset" | "button";
    label: string;
    className: string;
}

const Button: FC<IButton> = ({ type, label, className }) => {
    return (
        <button type={type} className={className}>
            {label}
        </button>
    );
};

export default Button;
