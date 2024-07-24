import {Component, MouseEventHandler} from "react";
import CommonProps from "../../commonProps";

interface TooltipProps extends CommonProps {
    content: string;
    dataTip: string;
    name?: string;
    onClick?: (valeu: string) => void;
    disabled?: boolean;
}

class Tooltip extends Component<TooltipProps> {

    render() {
        const {
            id,
            name,
            className = '',
            dataTip,
            content,
            disabled,
            onClick,
        } = this.props;

        const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (onClick && typeof onClick === 'function') {
                onClick(e.currentTarget.value);
            }
        }

        return (
            <div
                id={id}
                data-e="Tooltip"
                className={`tooltip ${className}`}
                data-tip={dataTip}
            >
                <button
                    name={name}
                    className="btn"
                    disabled={disabled}
                    onClick={onClickHandler}
                >
                    {content}
                </button>
            </div>
        );
    }
}

export default Tooltip;