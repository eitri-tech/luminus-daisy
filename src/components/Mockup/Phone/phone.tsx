import React, {Component} from "react";
import CommonProps from "../../commonProps";

class PhoneContent extends Component<CommonProps> {
    render() {
        const {
            children,
            className = "",
            id,
        } = this.props
        return (
            <div
                id={id}
                data-e="PhoneContent"
                className={`artboard artboard-demo phone-1  ${className}`}
            >
                {children}
            </div>
        );
    }
}

class Phone extends Component<CommonProps> {

    static Content = PhoneContent;

    render() {
        const {
            children,
            className = "",
            id,
        } = this.props
        return (
            <div
                id={id}
                data-e="Phone"
                className={`mockup-phone ${className}`}
            >
                <div className="camera"></div>
                <div className="display">
                    {children}
                </div>
            </div>
        );
    }
}

export default Phone;
