import {Component} from "react";
import CommonProps from "../../commonProps";

interface StackProps extends CommonProps { }

export default class Stack extends Component<StackProps> {
    render() {
        const {
            children,
            className = "",
            id
        } = this.props

        return (
            <div
                id={id}
                className={`stack ${className}`}
                data-e="Stack"
            >
                {children}
            </div>
        );
    }
}