import {Component} from "react";
import CommonProps from "../../commonProps";

interface ToggleProps extends CommonProps {
    name: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
}

class Toggle extends Component<ToggleProps> {
    render() {
        const {
            className = '',
            id,
            checked,
            disabled,
            name,
            indeterminate = false,
            onChange,
        } = this.props;
        return (
            <input
                id={id}
                name={name}
                type="checkbox"
                data-e="Toggle"
                checked={checked}
                className={`toggle ${className}`}
                disabled={disabled}
                onChange={e => onChange && onChange(e.target.checked)}
                ref={el => {
                    if (el) {
                        el.indeterminate = indeterminate;
                    }
                }}
            />
        );
    }
}

export default Toggle;