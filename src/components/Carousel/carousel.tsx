import React, { Component } from 'react';
import CommonProps from '../commonProps';

interface CarouselProps extends CommonProps {
  
}

interface CarouselItemProps extends CommonProps {
  
}

class CarouselItem extends Component<CarouselItemProps> {
  render() {
    const { children, className = "", id } = this.props;
    
    const isReactComponent = children != null; 

    return (
      <div data-e="CarouselItem" id={id} className={`carousel-item ${className}`}>
        {isReactComponent ? children : <span>{children}</span>}
      </div>
    );
  }
}

class Carousel extends Component<CarouselProps> {

  static readonly Item = CarouselItem

  render() {
    const { children, className = "", id } = this.props;
    
    const isReactComponent = children != null; 

    return (
      <div data-e="Carousel" id={id} className={`carousel ${className}`}>
        {isReactComponent ? children : <span>{children}</span>}
      </div>
    );
  }
}

export default Carousel;
