import React, { Component } from 'react';
import CommonProps from '../../commonProps';

interface CardProps extends CommonProps {
  name:string
}

interface CardImageProps extends CommonProps {
  src: string;
  alt: string;
}

interface CardBodyProps extends CommonProps {
  children: React.ReactNode;
}

interface CardTitleProps extends CommonProps {
  children: React.ReactNode;
}

interface CardTextProps extends CommonProps {
  children: React.ReactNode;
}

interface CardActionsProps extends CommonProps {
  children: React.ReactNode;
}

class CardBody extends Component<CardBodyProps> {
  render() {
    const { id,  className = "", children } = this.props;

    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }
}

class CardTitle extends Component<CardTitleProps> {
  render() {
    const { id, className = "", children } = this.props;

    return (
      <h2 id={id} className={`card-title ${className}`}>
        {children}
      </h2>
    );
  }
}
class CardText extends Component<CardTextProps> {
  render() {
    const { id, className = "", children } = this.props;

    return <p id={id} className={className}>{children}</p>;
  }
}

class CardImage extends Component<CardImageProps> {
  render() {
    const { id, className = "", src, alt } = this.props;

    return (
      <div>
        <img src={src} id={id} alt={alt} className={className} />
      </div>
    );
  }
}

class CardActions extends Component<CardActionsProps> {
  render() {
    const { id, className = "", children } = this.props;

    return <div id={id} className={className}>{children}</div>;
  }
}

class Card extends Component<CardProps> {
  static readonly Title = CardTitle
  static readonly Image = CardImage
  static readonly Text =  CardText
  static readonly Body =  CardBody
  static readonly Actions =  CardActions

  render() {
    const { id, className = "", children, name } = this.props;

    return (
      <div id={id} data-e="Card" name={name} className={className}>
        {children}
      </div>
    );
  }
}

export default Card ;
