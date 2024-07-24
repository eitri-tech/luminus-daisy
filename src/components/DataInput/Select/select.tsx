import {Component} from "react";
import CommonProps from "../../commonProps";

interface SelectProps extends CommonProps {
    name: string;
    value: string;
    options: OptionProps[];
    disabled?: boolean;
    onChange?: (value: string) => void;
}

interface OptionProps {
    value: string;
    label: string;
    disabled?: boolean;
}

export default class Select extends Component<SelectProps> {

    render() {
        const {
            name,
            value,
            className,
            id,
            disabled,
            options,
            onChange,
        } = this.props;

        return (
            <select
                data-e="Select"
                className={`select ${className}`}
                name={name}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange && onChange(e?.target?.value ?? "")}
                id={id}
                disabled={disabled}
            >
                {options?.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        )
    }
}