import {Component} from 'react';
import CommonProps from '../../commonProps';

interface SwapProps extends CommonProps { }

class Swap extends Component<SwapProps> {
    render() {
        const {children, className = '', id} = this.props;
        return (
            <label data-e="Swap" id={id} className={`swap ${className}`} >
                <input type="checkbox" />
                {children}
            </label>
        );
    }
}

export default Swap;