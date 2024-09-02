import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface HeaderProps extends CommonProps {
    
}

export default class Header extends Component<HeaderProps> {
    render() {
        const {
            children,
            className,
            id = "eitri-header-component"
        } = this.props

        return (
            <div id={id} className={`bg-primary p-4 flex flex-row justify-between items-center ${className}`}>
                {children}
            </div>
        );
    }
}
