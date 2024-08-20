
import {Component} from "react";
import CommonProps from "../../commonProps";

interface SkeletonProps extends CommonProps { }

class SkeletonLine extends Component<SkeletonProps> {
    render() {
        const {
            className = "",
            id = "",
        } = this.props

        return (
            <div
                id={id}
                data-e="SkeletonLine"
                className={`
                    skeleton
                    h-4
                    w-28
                    ${className}`
                }
            />
        );
    }
}

export default SkeletonLine;