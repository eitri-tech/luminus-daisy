import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface MaskProps extends CommonProps {
    src: string
}

export default class Mask extends Component<MaskProps> {
    render() {
        const {
            id,
            src = "",
            className = "",
        } = this.props

        return (
            <img
                id={id}
                data-e="Mask"
                className={`mask ${className}`}
                src={src}
            />
        );
    }
}
