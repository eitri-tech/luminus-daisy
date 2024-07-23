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
    checked?: boolean;
    value?: number;
    onChange?: (value: number) => void;
    disabled?: boolean;
}

class RateItem extends Component<RateItemProps> {
    handleChange = () => {
        const { value, onChange } = this.props;
        if (onChange) {
            onChange(value || 0);
        }
    }

    render() {
        const {
            className = '',
            id,
            name = '',
            checked,
            value,
        } = this.props;
        return (
            <input
                data-e="RateItem"
                type="radio"
                name={name}
                checked={checked}
                id={id}
                value={value}
                className={`mask mask-star ${className}`}
                onChange={this.handleChange}
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

    handleChange = (value: number) => {
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
                    onChange: this.handleChange,
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
