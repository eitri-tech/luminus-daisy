import {Component} from "react";
import MaskedTextInput from "./maskInput";
import {InputVariant, TextInputProps} from "./InputInterface";


class TextInput extends Component<TextInputProps> {
    render() {
        const {
            id,
            className = "",
            iconInsideLeft,
            iconInsideRight,
            labelInsideLeft,
            labelInsideRight,
            mask,
            variant = InputVariant.text,
            ...rest
        } = this.props;

        const classNameInput = "input input-bordered flex items-center gap-2";

        if(variant === InputVariant.mask) {
            return (
                <MaskedTextInput
                    data-e={"MaskedTextInput"}
                    id={id}
                    className={className}
                    iconInsideLeft={iconInsideLeft}
                    iconInsideRight={iconInsideRight}
                    labelInsideLeft={labelInsideLeft}
                    labelInsideRight={labelInsideRight}
                    mask={mask}
                    {...rest}
                />
            );
        }

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
