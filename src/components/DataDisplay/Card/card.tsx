import {Component} from 'react';
import CommonProps from '../../commonProps';
import Image from '../../Image/image';

interface CardImageProps extends CommonProps {
    src: string
    alt: string
}

class CardImage extends Component<CardImageProps> {
    render() {
        const {
            className = "",
            src,
            alt
        } = this.props;

        return (
            <figure
                className={`card-image ${className}`}
                data-e="CardImage"
            >
                <Image
                    src={src}
                    alt={alt}
                />
            </figure>
        );
    }
}

class CardBody extends Component<CommonProps> {
    render() {
        const {
            id,
            className = "",
            children
        } = this.props;

        return (
            <div
                id={id}
                className={`card-body ${className}`}
                data-e="CardBody"
            >
                {children}
            </div>
        );
    }
}

class CardTitle extends Component<CommonProps> {
    render() {
        const {id,
            className = "",
            children
        } = this.props;

        return (
            <h2
                id={id}
                className={`card-title ${className}`}
                data-e="CardTitle"
            >
                {children}
            </h2>
        );
    }
}

class CardActions extends Component<CommonProps> {
    render() {
        const {
            id,
            className = "",
            children
        } = this.props;

        return (
            <div
                id={id}
                className={`card-actions ${className}`}
                data-e="CardActions"
            >
                {children}
            </div>
        );
    }
}

class Card extends Component<CommonProps> {
    static readonly Title = CardTitle
    static readonly Body = CardBody
    static readonly Actions = CardActions
    static readonly Image = CardImage

    render() {
        const {
            id,
            className = "",
            children
        } = this.props;

        return (
            <div
                id={id}
                data-e="Card"
                className={`card ${className}`}
            >
                {children}
            </div>
        );
    }
}

export default Card;
