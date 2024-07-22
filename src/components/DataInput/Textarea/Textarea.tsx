import {Component} from "react";
import CommonProps from "../../commonProps";

interface TextareaProps extends CommonProps {
    name: string;
    value: string;
    disabled?: boolean;
    placeholder?: string;
    onChange: (value: string) => void;
}

class Textarea extends Component<TextareaProps> {
    render() {
        const {
            className = '',
            id,
            name = '',
            placeholder = '',
            value,
            disabled = false,
            onChange
        } = this.props;
        return (
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                className={`textarea ${className}`}
                disabled={disabled}
                data-e="Textarea"
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
            />
        );
    }
}

export default Textarea;