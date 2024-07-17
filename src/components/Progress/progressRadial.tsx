import {Component, CSSProperties} from 'react';
import CommonProps from '../commonProps';

interface ProgressProps extends CommonProps {
    value: number,
    displayValue: string,
}

class ProgressRadial extends Component<ProgressProps> {
    render() {
        const {
            id,
            className = "",
            value = 0,
            displayValue
        } = this.props;

        return (
            <div
                data-e="ProgressRadial"
                id={id}
                className={`radial-progress ${className}`}
                role='progressbar'
                style={{"--value": value} as CSSProperties}>
                {displayValue}
            </div>
        );
    }
}

export default ProgressRadial;
