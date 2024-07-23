import { ChangeEvent, Component } from 'react';
import CommonProps from '../../commonProps';

interface SwapProps extends CommonProps {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface SwapItemProps extends CommonProps { }


class SwapOn extends Component<SwapItemProps> {
    render() {
        const {children, className = '', id} = this.props;
        return (
            <div data-e="SwapOn" id={id} className={`swap-on ${className}`}>
                {children}
            </div>
        );
    }
}

class SwapOff extends Component<SwapItemProps> {
    render() {
        const {children, className = '', id} = this.props;
        return (
            <div data-e="SwapOff" id={id} className={`swap-off ${className}`}>
                {children}
            </div>
        );
    }
}


class Swap extends Component<SwapProps> {

    static readonly On = SwapOn;
    static readonly Off = SwapOff;

    render() {
        const {children, className = '', id, onChange} = this.props;
        return (
            <label data-e="Swap" id={id} className={`swap ${className}`} >
                <input type="checkbox" onChange={onChange} />
                {children}      
            </label>
        );
    }
}

export default Swap;