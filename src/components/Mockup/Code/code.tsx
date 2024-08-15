import {Component} from "react";
import CommonProps from "../../commonProps";

interface BrowserProps extends CommonProps {
    
}

export default class Code extends Component<BrowserProps> {
    render() {
        const {
            children,
            className,
            id
        } = this.props

        return (
            <div id={id} className={`mockup-code ${className}`}>
                <pre data-prefix="$"><code>{children}</code></pre>
            </div>
        );
    }
}
