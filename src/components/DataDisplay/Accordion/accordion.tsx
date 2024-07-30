import {Component} from "react";
import CommonProps from "../../commonProps";

interface AccordionProps extends CommonProps {
    name: string;
}

class Title extends Component<CommonProps> {
    render() {
        const {
            children,
            className,
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`collapse-title ${className}`}
            >
                {children}
            </div>
        );
    }
}

class Content extends Component<CommonProps> {
    render() {
        const {
            children,
            className,
            id
        } = this.props;

        return (
            <div
                id={id}
                className={`collapse-content ${className}`}
            >
                {children}
            </div>
        );
    }
}

export default class Accordion extends Component<AccordionProps> {

    static readonly Content = Content;
    static readonly Title = Title;

    render() {
        const {
            id,
            className = "",
            name = "",
            children,
        } = this.props;

        return (
            <div
                id={id}
                data-e="Accordion"
                className={`collapse ${className}`}
            >
                <input
                    type="radio"
                    name={name}
                    defaultChecked
                />
                {children}
            </div>
        );
    }
}