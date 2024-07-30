import {Component} from "react";
import CommonProps from "../../commonProps";

interface ArtboardProps extends CommonProps {}

export default class Artboard extends Component<ArtboardProps> {
    render() {
        const {
            className = "",
            children,
        } = this.props

        return (
            <div
                data-e="Artboard"
                className={`artboard ${className}`}
            >
                {children}
            </div>
        );
    }
}