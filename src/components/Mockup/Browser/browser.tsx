import {Component} from "react";
import CommonProps from "../../commonProps";

interface BrowserProps extends CommonProps {
    url: string;
}

export default class Browser extends Component<BrowserProps> {
    render() {
        const {
            url,
            children,
            className,
            id
        } = this.props

        return (
            <div id={id} className={`mockup-browser border-base-300 border ${className}`}>
                {url && (
                    <div className="mockup-browser-toolbar">
                        <div className="input border-base-300 border">{url}</div>
                    </div>
                )}
                {children}
            </div>
        );
    }
}