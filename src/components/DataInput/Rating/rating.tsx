import React, { Component } from "react";
import CommonProps from '../../commonProps';

interface RatingProps extends CommonProps {
    onChange?: (value: number) => void;
    value?: number;
    max?: number;
    readonly?: boolean;
    disabled?: boolean;
}

interface RateItemProps extends CommonProps {
    name?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    value?: number;
    onClick?: (value: number) => void;
    disabled?: boolean;
}

class RateItem extends Component<RateItemProps> {
    handleClick = () => {
        const { value, onClick } = this.props;
        if (onClick) {
            onClick(value || 0);
        }
    }

    render() {
        const {
            className = '',
            id,
            name = '',
            defaultChecked,
            checked,
            value,
        } = this.props;
        return (
            <input
                data-e="RateItem"
                type="radio"
                name={name}
                defaultChecked={defaultChecked}
                checked={checked}
                id={id}
                value={value}
                className={`mask mask-star ${className}`}
                onClick={this.handleClick}
            />
        );
    }
}

interface RatingState {
    value: number;
}

class Rating extends Component<RatingProps, RatingState> {

    static readonly Item = RateItem;

    constructor(props: RatingProps) {
        super(props);
        this.state = {
            value: props.value || 0
        };
    }

    handleClick = (value: number) => {
        this.setState({ value });
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    render() {
        const {
            className = '',
            id,
            readonly,
            children,
        } = this.props;

        const { value } = this.state;

        const childrenWithProps = React.Children.map(children as any, (child: React.ReactElement<RateItemProps>) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    checked: child.props.value === value,
                    onClick: this.handleClick,
                    disabled: readonly,
                });
            }
            return child;
        });

        return (
            <div
                data-e="Rating"
                id={id}
                className={`rating ${className}`}
            >
                {childrenWithProps}
            </div>
        );
    }
}

export default Rating;
