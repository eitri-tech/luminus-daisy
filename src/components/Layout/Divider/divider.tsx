import {Component} from "react";
import CommonProps from "../../commonProps";

interface DividerProps extends CommonProps {}

class Divider extends Component<DividerProps> {
    render() {
        const {
            children,
            className = "",
            id,
        } = this.props;

        return (
            <div
                id={id}
                data-e="Divider"
                className={`divider ${className}`}
            >
                {children}
            </div>
        )
    }
}

export default Divider;