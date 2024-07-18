import {Component} from "react"
import CommonProps from '../../commonProps';

interface CheckboxProps extends CommonProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    readonly?: boolean;
}

class Checkbox extends Component<CheckboxProps> {
    render() {

        const {
            className = '',
            id,
            defaultChecked,
            disabled,
            indeterminate = false,
            value,
            readonly,
            onChange,
        } = this.props;
        return (
            <input
                type="checkbox"
                data-e="Checkbox"
                defaultChecked={defaultChecked}
                disabled={disabled}
                id={id}
                checked={value}
                className={`checkbox ${className}`}
                readOnly={readonly}
                onChange={onChange}
                ref={el => {
                    if (el) {
                        el.indeterminate = indeterminate;
                    }
                }}
            />
        );
    }
}

export default Checkbox;