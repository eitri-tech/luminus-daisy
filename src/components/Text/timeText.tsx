import {Component} from "react";
import CommonProps from "../commonProps";

class TimeText extends Component<CommonProps> {
    render() {
        const {
            children,
            className = "",
            id
        } = this.props;

        return (
            <time
                id={id}
                data-e="TimeText"
                className={`font-mono italic ${className}`}>
                {children}
            </time>
        );
    }
}

export default TimeText;