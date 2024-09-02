import React, {Component} from "react";
import CommonProps from "../../commonProps";

interface BreadcrumbsProps extends CommonProps { }

interface BreadcrumbsItemProps extends CommonProps { }

class BreadcrumbsItem extends Component<BreadcrumbsItemProps> {
    render() {
        const {
            children,
            className = ""
        } = this.props;

        const defaultStyle = "hover:underline cursor-pointer inline-flex gap-2 items-center";

        return (
            <li>
                <span
                    className={`${defaultStyle} ${className}`}
                >
                    {children}
                </span>
            </li>
        )
    }
}

export default class Breadcrumbs extends Component<BreadcrumbsProps> {

    static readonly Item = BreadcrumbsItem;

    render() {
        const {
            id = "",
            className = "",
            children
        } = this.props;

        return (
            <div
                id={id}
                data-e="Breadcrumbs"
                className={`breadcrumbs ${className}`}
            >
                <ul>
                    {children}
                </ul>
            </div>
        );
    }
}
