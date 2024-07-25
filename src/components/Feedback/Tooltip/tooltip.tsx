import {Component} from "react";
import CommonProps from "../../commonProps";

interface TooltipProps extends CommonProps {
    dataTip: string;
}

class Tooltip extends Component<TooltipProps> {

    render() {
        const {
            id,
            className = '',
            dataTip,
            children,
        } = this.props;

        return (
            <div
                id={id}
                data-e="Tooltip"
                className={`tooltip ${className}`}
                data-tip={dataTip}
            >
                {children}
            </div>
        );
    }
}

export default Tooltip;