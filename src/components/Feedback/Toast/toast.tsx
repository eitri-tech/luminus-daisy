import {Component} from "react";
import CommonProps from "../../commonProps";

class ToastAlert extends Component<CommonProps> {
    render() {
        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                data-e="ToastAlert"
                className={`alert ${className}`}
                id={id}
            >
                {children}
            </div>
        );

    }
}

class Toast extends Component<CommonProps> {
    static Alert = ToastAlert;

    render() {
        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <div
                data-e="Toast"
                className={`toast ${className}`}
                id={id}
            >
                {children}
            </div>
        );
    }
}

export default Toast;