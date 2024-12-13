import React, {Component} from "react";
import CommonProps from "../../commonProps";

class DiffItem1 extends Component<CommonProps> {
    render() {
        const {
            children,
            className = "",
            id,
        } = this.props;
        return (
            <div
                id={id}
                data-e="DiffItem1"
                className={`diff-item-1 ${className}`}
            >
                {children}
            </div>
        );
    }
}

class DiffItem2 extends Component<CommonProps> {
    render() {
        const {
            children,
            className = "",
            id,
        } = this.props;
        return (
            <div
                id={id}
                data-e="DiffItem2"
                className={`diff-item-2 ${className}`}
            >
                {children}
            </div>
        );
    }
}

class Diff extends Component<CommonProps> {

    static Item1 = DiffItem1;
    static Item2 = DiffItem2;

    render() {
        const {
            children,
            className = "",
            id,
        } = this.props
        return (
            <div
                id={id}
                data-e="Diff"
                className={`diff ${className}`}
            >
                {children}
                <div className="diff-resizer"></div>
            </div>
        );
    }
}

export default Diff;
