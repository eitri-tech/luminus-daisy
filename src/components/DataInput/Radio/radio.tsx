import {Component} from "react";
import CommonProps from "../../commonProps";

interface RadioProps extends CommonProps {
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    defaultChecked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
}

export default class Radio extends Component<RadioProps> {

    render() {
        const {
            name,
            value,
            checked,
            onChange,
            defaultChecked,
            className,
            id,
            disabled,
            readonly,
        } = this.props;

        return (
            <input
                data-e="Radio"
                type="radio"
                className={`radio ${className}`}
                name={name}
                value={value}
                checked={checked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e?.target?.value ?? "")}
                defaultChecked={defaultChecked}
                id={id}
                disabled={disabled}
                readOnly={readonly}
            />
        )
    }
}