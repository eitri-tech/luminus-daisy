import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface FullScreenProps extends CommonProps {
    enabled?: boolean;
}

class FullScreen extends Component<FullScreenProps> {
    render() {
        const {
            id,
            children,
            className = "",
            enabled = false,
        } = this.props

        const fullscreenClass = enabled
            ? "fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col"
            : "";

        return (
            <div
                id={id}
                data-e="FullScreen"
                className={`${fullscreenClass} ${className}`}
            >
                {children}
            </div>
        );
    }
}

export default FullScreen;
