import React, {Component, RefObject} from "react";
import {TextInputProps} from "./InputInterface";


interface TextInputState {
    maskedValue: string;
}

class MaskedTextInput extends Component<TextInputProps, TextInputState> {
    private inputRef: RefObject<HTMLInputElement>;

    private MASK_PATTERN_NUMBER: string = "9"

    constructor(props: TextInputProps) {
        super(props);
        this.state = {
            maskedValue: this.applyMask(props.value?.toString() || ""),
        };
        this.inputRef = React.createRef();
    }

    componentDidUpdate(prevProps: TextInputProps) {
        if (prevProps.value !== this.props.value || prevProps.mask !== this.props.mask) {
            this.setState({maskedValue: this.applyMask(this.props.value?.toString() || "")});
        }
    }

    applyMask(value: string): string {
        const {mask} = this.props;
        if (!mask) return value;

        const masks = typeof mask === "string" ? [mask] : mask;
        let masked = "";

        for (const currentMask of masks) {
            const unmaskedValue = value.replace(/\D/g, "");
            let j = 0;
            let tempMasked = "";

            for (let i = 0; i < currentMask.length; i++) {
                if (j >= unmaskedValue.length) {
                    break;
                }
    
                if (currentMask[i] === this.MASK_PATTERN_NUMBER) {
                    tempMasked += unmaskedValue[j];
                    j++;
                } else {
                    tempMasked += currentMask[i];
                }
            }

            masked = tempMasked;
        }

        return masked;
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const maskedValue = this.applyMask(inputValue);
        this.setState({maskedValue});
        this.props.onChange && this.props.onChange(event);
    };

    render() {
        const {
            id,
            className = "",
            iconInsideLeft,
            iconInsideRight,
            labelInsideLeft,
            labelInsideRight,
            mask,
            onClear,
            ...rest
        } = this.props;

        const {maskedValue} = this.state;
        const classNameInput = "input input-bordered flex items-center gap-2";

        return (
            <label
                data-e="MaskedTextInput"
                id={`${id}-label`}
                className={`${classNameInput} ${className}`}
            >
                {iconInsideLeft && <span>{iconInsideLeft}</span>}
                {labelInsideLeft && <label className="label">{labelInsideLeft}</label>}
                <input
                    ref={this.inputRef}
                    className="grow"
                    value={maskedValue}
                    onChange={this.handleChange}
                    {...rest}
                />
                {labelInsideRight && <label className="label">{labelInsideRight}</label>}
                {iconInsideRight && <span>{iconInsideRight}</span>}
            </label>
        );
    }
}

export default MaskedTextInput;
