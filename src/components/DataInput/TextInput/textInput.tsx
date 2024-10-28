import React, {Component} from "react";
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
               <input
                    data-e="TextInput"
                    className={`input input-bordered ${className}`}
                    {...rest}
                />
        );
    }
}

export default TextInput;
