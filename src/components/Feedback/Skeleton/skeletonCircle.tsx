
import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface SkeletonProps extends CommonProps { }

class SkeletonCircle extends Component<SkeletonProps> {
    render() {
        const {
            className = "",
            id = "",
        } = this.props

        return (
            <div
                id={id}
                data-e="SkeletonCircle"
                className={`
                    skeleton
                    h-16
                    w-16
                    shrink-0
                    rounded-full
                    ${className}`
                }
            />
        );
    }
}

export default SkeletonCircle;
