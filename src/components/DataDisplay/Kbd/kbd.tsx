import {Component} from "react";
import CommonProps from "../../commonProps";

export default class Kbd extends Component<CommonProps> {
    render() {
        const {
            children,
            className = "",
            id,
        } = this.props
        return (
            <kbd
                id={id}
                className={`kbd ${className}`}
                data-e="Kbd"
            >
                {children}
            </kbd>
        );
    }
}