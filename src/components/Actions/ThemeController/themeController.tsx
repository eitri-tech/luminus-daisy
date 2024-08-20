import {Component} from "react";
import CommonProps from "../../commonProps";

interface ThemeControllerProps extends CommonProps {
    value: string;
    checked: boolean;
    onChange: () => void;
    name?: string;
    type?: string;
    label?: string;
}

class ThemeController extends Component<ThemeControllerProps> {

    handleChange = () => {
        const {onChange} = this.props;
        if (onChange) {
            onChange();
        }
    }

    render() {
        const {
            className = "",
            value = "synthwave",
            id,
            checked = false,
            name = "",
            type = "checkbox",
            label = ""
        } = this.props

        return (
            <input
                id={id}
                name={name}
                data-e="Theme-controller"
                type={type}
                value={value}
                checked={checked}
                aria-label={label}
                className={`theme-controller ${className}`}
                onChange={this.handleChange}
            />
        );
    }
}

export default ThemeController;