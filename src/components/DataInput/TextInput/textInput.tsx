import {Component, HTMLInputTypeAttribute} from "react";
import CommonProps from "../../commonProps";

interface TextInputProps extends CommonProps {
    name: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    type?: HTMLInputTypeAttribute;
    iconInsideLeft?: string;
    iconInsideRight?: string;
    labelInsideRight?: string;
    labelInsideLeft?: string;
    onChange?: (value: string) => void;
}

class TextInput extends Component<TextInputProps> {
    render() {
        const {
            id,
            name,
            className = "",
            value,
            placeholder,
            disabled,
            readonly,
            type = "text",
            iconInsideLeft,
            iconInsideRight,
            labelInsideLeft,
            labelInsideRight,
            onChange,
        } = this.props;

        const classNameInput = "input input-bordered flex items-center gap-2";

        return (
            <label
                data-e="TextInput"
                id={id}
                className={`${classNameInput} ${className}`}
            >
                {iconInsideLeft && <span>{iconInsideLeft}</span>}
                {labelInsideLeft && <label className="label">{labelInsideLeft}</label>}
                <input
                    name={name}
                    id={id}
                    className="grow"
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readonly}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)}
                />
                {labelInsideRight && <label className="label">{labelInsideRight}</label>}
                {iconInsideRight && <span>{iconInsideRight}</span>}
            </label>
        );
    }
}

export default TextInput;
