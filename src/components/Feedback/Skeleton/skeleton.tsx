import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface SkeletonProps extends CommonProps { }

class Skeleton extends Component<SkeletonProps> {
    render() {
        const {
            className = "",
            id = "",
            children
        } = this.props

        return (
            <div
                id={id}
                data-e="Skeleton"
                className={`skeleton h-32 w-32 ${className}`}
            >
                {children}
            </div>
        );
    }
}

export default Skeleton;
