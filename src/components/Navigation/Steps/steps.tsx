import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface StepsProps extends CommonProps {
    scrollable?: boolean;
}

interface StepItemProps extends CommonProps {
    dataContent?: string;
}

class StepItem extends Component<StepItemProps> {
    render() {
        const {children, className = "", id, dataContent} = this.props;
        return (
            <li
                data-e="StepItem"
                id={id}
                className={`step ${className}`}
                data-content={dataContent}
            >
                {children}
            </li>
        );
    }
}

class Steps extends Component<StepsProps> {

    static readonly Step = StepItem;

    render() {
        const {children, className = "", id, scrollable} = this.props;

        return (
            <div className={`${scrollable && "overflow-x-auto"}`}>
                <ul data-e="Steps" id={id} className={`steps ${className}`}>
                    {children}
                </ul>
            </div>
        );
    }
}

export default Steps;
