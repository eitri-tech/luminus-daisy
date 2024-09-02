import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface CodeProps extends CommonProps {
    
}

export default class Code extends Component<CodeProps> {
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
