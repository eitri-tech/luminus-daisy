import React, { Component } from 'react';
import CommonProps from '../../commonProps';

interface CarouselProps extends CommonProps {
  onSwipe?: (activeIndex: number) => void
  index?: number
}

interface CarouselItemProps extends CommonProps {
  
}

class CarouselItem extends Component<CarouselItemProps> {
  render() {
    const { children, className = "", id } = this.props;
    
    const isReactComponent = children != null; 

    return (
      <div data-e="CarouselItem" id={id} className={`carousel-item ${className}`} style={{scrollSnapStop: "always"}}>
        {isReactComponent ? children : <span>{children}</span>}
      </div>
    );
  }
}

interface CarouselState {
  activeIndex: number | null;
}

class Carousel extends Component<CarouselProps, CarouselState> {

  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      activeIndex: null,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  static readonly Item = CarouselItem

  containerRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const container = this.containerRef.current;
    if (container) {
      container.addEventListener('scroll', this.handleScroll);
    }
  }

  componentDidUpdate(prevProps: CarouselProps) {
    if (prevProps.index !== this.props.index && this.props.index !== undefined) {
      this.scrollToItem(this.props.index);
    }
  }

  componentWillUnmount() {
    const container = this.containerRef.current;
    if (container) {
      container.removeEventListener('scroll', this.handleScroll);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timeoutId: any | null = null;

  handleScroll() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      const container = this.containerRef.current;
      const items = container?.querySelectorAll('.carousel-item');

      if (!container || !items) return;

      let activeIndex: number | null = null;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.left < window.innerWidth / 2 && itemRect.right > window.innerWidth / 2) {
          activeIndex = index;
        }
      });

      if (activeIndex !== null) {
        this.setState({ activeIndex });
        if (this.props.onSwipe) {
          this.props.onSwipe(activeIndex);
        }
      }

      this.timeoutId = null; 
    }, 200);
  }

  scrollToItem(index: number) {
    const container = this.containerRef.current;
    const items = container?.querySelectorAll('.carousel-item');

    if (!container || !items) return;

    if (index >= 0 && index < items.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const item:any = items[index];
      container.scrollLeft = item.offsetLeft;
    } else {
      console.error('Invalid index. Index must between 0 and ', items.length - 1);
    }
  }

  render() {
    const { children, className = "", id } = this.props;
    
    const isReactComponent = children != null; 

    return (
      <div data-e="Carousel" id={id} className={`carousel ${className}`} ref={this.containerRef}>
        {isReactComponent ? children : <span>{children}</span>}
      </div>
    );
  }
}

export default Carousel;
