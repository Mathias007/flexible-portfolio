import { ChangeEvent, FC } from "react";

interface IFormField {
    id: string;
    type: string;
    name: string;
    className: string;
    placeholder: string;
    required: boolean;
    value: string;
    onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

const FormField: FC<IFormField> = ({
    id,
    type,
    name,
    className,
    placeholder,
    required,
    value,
    onChange,
}) => {
    switch (type) {
        case "textarea":
            return (
                <textarea
                    id={id}
                    name={name}
                    className={className}
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                    defaultValue={value}
                />
            );

        default:
            return (
                <input
                    id={id}
                    name={name}
                    className={className}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                />
            );
    }
};

export default FormField;
