import React, {Component} from 'react';
import CommonProps from '../../commonProps';

interface ProgressProps extends CommonProps {
    value?: number,
    max?: number
}

class Progress extends Component<ProgressProps> {
    render() {
        const {
            id,
            className = "",
            value = undefined,
            max = undefined
        } = this.props;

        return (
            <progress
                data-e="Progress"
                id={id}
                className={`progress ${className}`}
                value={value}
                max={max}
                role="progressbar"
            >
            </progress>
        );
    }
}

export default Progress;
