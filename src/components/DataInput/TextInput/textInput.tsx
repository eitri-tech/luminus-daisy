import React, {Component, InputHTMLAttributes} from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconInsideLeft?: string;
    iconInsideRight?: string;
    labelInsideRight?: string;
    labelInsideLeft?: string;
}

class TextInput extends Component<TextInputProps> {
    render() {
        const {
            id,
            className = "",
            iconInsideLeft,
            iconInsideRight,
            labelInsideLeft,
            labelInsideRight,
            ...rest
        } = this.props;

        const classNameInput = "input input-bordered flex items-center gap-2";

        return (
            <label
                data-e="TextInput"
                id={`${id}-label`}
                className={`${classNameInput} ${className}`}
            >
                {iconInsideLeft && <span>{iconInsideLeft}</span>}
                {labelInsideLeft && <label className="label">{labelInsideLeft}</label>}
                <input
                    className="grow"
                    {...rest}
                />
                {labelInsideRight && <label className="label">{labelInsideRight}</label>}
                {iconInsideRight && <span>{iconInsideRight}</span>}
            </label>
        );
    }
}

export default TextInput;
