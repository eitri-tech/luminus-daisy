import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface RangeProps extends CommonProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: number | string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    disabled?: boolean;
}

class Range extends Component<RangeProps> {
    render() {
        const {
            className = '',
            id,
            value,
            min,
            max,
            step,
            disabled,
            onChange,
        } = this.props;
        return (
            <input
                id={id}
                type="range"
                data-e="Range"
                value={value}
                min={min}
                max={max}
                step={step}
                className={`range ${className}`}
                disabled={disabled}
                onChange={onChange}
            />
        );
    }
}

export default Range;
