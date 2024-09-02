import React, {Component} from "react";
import CommonProps from "../../commonProps";

export interface StatsProps extends CommonProps { }

export default class Stats extends Component<StatsProps> {
    render() {

        const {
            id,
            children,
            className = '',
        } = this.props

        return (
            <div
                id={id}
                className={`stats ${className}`}
            >
                {children}
            </div>
        );
    }
}
