import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface IndicatorProps extends CommonProps { }

class Indicator extends Component<IndicatorProps> {
    render() {

        const {
            id = "",
            className = "",
            children = null,
        } = this.props;

        return (
            <div
                id={id}
                data-e="Indicator"
                className={`indicator ${className}`}
            >
                {children}
            </div>
        );
    }
}

export default Indicator;
