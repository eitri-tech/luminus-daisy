import React, {Component, CSSProperties} from 'react';
import CommonProps from '../../commonProps';

interface ProgressRadialProps extends CommonProps {
    value: number,
    displayValue?: string,
}

class ProgressRadial extends Component<ProgressRadialProps> {
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
                {displayValue ?? value}
            </div>
        );
    }
}

export default ProgressRadial;
