import {Component} from "react";
import CommonProps from "../../commonProps";

interface BrowserProps extends CommonProps {
    addressBar: string;
}

export default class Browser extends Component<BrowserProps> {
    render() {
        const {
            addressBar,
            children,
            className,
            id
        } = this.props

        return (
            <div id={id} className={`mockup-browser border-base-300 border ${className}`}>
                <div className="mockup-browser-toolbar">
                    <div className="input border-base-300 border">{addressBar}</div>
                </div>
                {children}
            </div>
        );
    }
}