import {Component} from 'react';
import CommonProps from '../commonProps';

interface LinkProps extends CommonProps { }

class Link extends Component<LinkProps> {
    render() {
        const {children, className = "", id} = this.props;
        return (
            <a data-e="Link" id={id} className={className}>
                {children}
            </a>
        );
    }
}

export default Link;