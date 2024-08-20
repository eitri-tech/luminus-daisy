import {Component} from "react";
import CommonProps from "../../commonProps";

interface TooltipProps extends CommonProps {
    tip?: string;
}

class Tooltip extends Component<TooltipProps> {

    render() {
        const {
            id,
            className = '',
            tip,
            children,
        } = this.props;

        if(!tip) {
            return children;
        }

        return (
            <div
                id={id}
                data-e="Tooltip"
                className={`tooltip ${className}`}
                data-tip={tip}
            >
                {children}
            </div>
        );
    }
}

export default Tooltip;