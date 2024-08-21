import {Component} from "react";
import CommonProps from "../../commonProps";

interface DrawerProps extends CommonProps {
    onClick?: (checked: boolean) => void;
}

const ID: string = "my-drawer-1";

interface DrawerContentProps extends CommonProps {
    labelText?: string;
    labelClassName?: string;
}

class DrawerContent extends Component<DrawerContentProps> {
    render() {
        const {
            className = "",
            children,
            labelText = "",
            labelClassName = ""
        } = this.props
        return (
            <div
                id={ID}
                data-e="DrawerContent"
                className={`drawer-content ${className}`}
            >
                {children}
                <label htmlFor={ID} className={`btn btn-primary drawer-button ${labelClassName}`}>{labelText}</label>
            </div>
        );
    }
}

class DrawerSide extends Component<CommonProps> {
    render() {
        const {
            className = "",
            children,
        } = this.props
        return (
            <div
                id={ID}
                data-e="DrawerSide"
                className={`drawer-side ${className}`}
            >
                <label
                    htmlFor={ID}
                    aria-label="close sidebar"
                    className={"drawer-overlay"}>
                </label>
                {children}
            </div>
        );
    }
}

class Drawer extends Component<DrawerProps> {
    static Content = DrawerContent;
    static Side = DrawerSide;

    render() {
        const {
            children,
            className = "",
            onClick
        } = this.props

        return (
            <div
                data-e="Drawer"
                className={`drawer ${className}`}
            >
                <input
                    id={ID}
                    type="checkbox"
                    className="drawer-toggle"
                    onClick={(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => onClick && onClick(event.currentTarget.checked)}
                />
                {children}
            </div>
        );
    }
}

export default Drawer;