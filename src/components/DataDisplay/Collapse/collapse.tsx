import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface CollapseProps extends CommonProps {
    focus?: boolean;
    checkbox?: boolean;
}

interface CollapseTitleProps extends CommonProps {
    className?: string;
    title: string;
}

class CollapseTitle extends Component<CollapseTitleProps> {

    render() {
        const {
            children,
            className = ""
        } = this.props;

        return (
            <div className={`collapse-title ${className}`}>
                {children}
            </div>
        );
    }
}

class CollapseContent extends Component<CommonProps> {

    render() {
        const {
            children,
            className = ""
        } = this.props;

        return (
            <div className={`collapse-content ${className}`}>
                {children}
            </div>
        );
    }
}

class CollapseCheckbox extends Component<CommonProps, React.InputHTMLAttributes<HTMLInputElement>> {
    render() {
        return (
            <input />
        )
    }
}

class Collapse extends Component<CollapseProps> {

    static readonly Title = CollapseTitle;
    static readonly Content = CollapseContent;

    render() {

        const {
            id = "",
            className = "",
            children,
            focus = false,
            checkbox = false
        } = this.props;

        return (
            <div
                data-e="Collapse"
                tabIndex={focus ? 0 : undefined}
                id={id}
                className={`collapse ${className}`}
            >
                {checkbox && <input type="checkbox" id={id} />}
                
                {children}
            </div>
        );
    }
}

export default Collapse;