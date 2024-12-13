import React, { Component, createRef } from 'react';
import CommonProps from '../commonProps';

interface ImageProps extends Omit<CommonProps, 'children'> {
  src: string;
  alt?: string;
  loading?: 'eager' | 'lazy'; 
  decoding?: 'sync' | 'async';
  width?: string | number;
  height?: string | number;
  title?: string;
  srcSet?: string;
  sizes?: string;
  onLoad?: () => void;
  pinchZoom?: boolean;
  zoomMaxScale?: number;
  zoomMaxTranslate?: number;
}

interface ImageState {
  imageError: boolean;
  originalScale: number;
  originalTranslateX: number;
  originalTranslateY: number;
  startDistance: number;
  startX: number;
  startY: number;
  scale: number;
  translateX: number;
  translateY: number;
}

class Image extends Component<ImageProps, ImageState> {

  state:ImageState = {
    imageError: false,
    originalScale: 1,
    originalTranslateX: 0,
    originalTranslateY: 0,
    startDistance: 0,
    startX: 0,
    startY: 0,
    scale: 1,
    translateX: 0,
    translateY: 0,
  };

  zoomContainerRef = createRef<HTMLDivElement>();

  handleError = () => {
    this.setState({ imageError: true });
  };

  componentDidMount(): void {
    this.setupZoomFunctionality();
  }

  componentDidUpdate(prevProps: ImageProps) {
      if (prevProps.src !== this.props.src) {
          this.setupZoomFunctionality(); 
      }
  }

  setupZoomFunctionality = () => {
      const { zoomMaxScale, zoomMaxTranslate } = this.props;
      setTimeout(() => {
          if (this.zoomContainerRef.current) {
              const MAX_SCALE = zoomMaxScale ?? 2;
              const MIN_SCALE = 1;
              const MAX_TRANSLATE_X = zoomMaxTranslate ?? 100;
              const MIN_TRANSLATE_X = zoomMaxTranslate? -zoomMaxTranslate : -100;
              const MAX_TRANSLATE_Y = zoomMaxTranslate ?? 100;
              const MIN_TRANSLATE_Y = zoomMaxTranslate? -zoomMaxTranslate : -100;

              function getDistance(touches: TouchList): number {
                  const [touch1, touch2] = touches;
                  return Math.hypot(touch2.pageX - touch1.pageX, touch1.pageY - touch2.pageY);
              }

              function getMidpoint(touches: TouchList): { x: number; y: number } {
                  const [touch1, touch2] = touches;
                  return {
                      x: (touch1.clientX + touch2.clientX) / 2,
                      y: (touch1.clientY + touch2.clientY) / 2,
                  };
              }

              function handleTouchStart(event: TouchEvent, image: HTMLElement, state: ImageState) {
                  if (event.touches.length === 2) {
                      state.startDistance = getDistance(event.touches);
                      const { x, y } = getMidpoint(event.touches);
                      state.startX = x;
                      state.startY = y;
                      image.style.transition = 'none'; 
                      image.style.transform = `scale(${state.scale}) translate(${state.translateX}px, ${state.translateY}px)`;
                  }
              }

              function handleTouchMove(event: TouchEvent, image: HTMLElement, state: ImageState) {
                  if (event.touches.length === 2) {
                      event.preventDefault();
                      const currentDistance = getDistance(event.touches);
                      state.scale = Math.min(
                          Math.max((currentDistance / state.startDistance) * state.originalScale, MIN_SCALE),
                          MAX_SCALE
                      );

                      const { x, y } = getMidpoint(event.touches);
                      const deltaX = x - state.startX;
                      const deltaY = y - state.startY;

                      state.translateX += deltaX;
                      state.translateY += deltaY;

                      state.translateX = Math.min(Math.max(state.translateX, MIN_TRANSLATE_X), MAX_TRANSLATE_X);
                      state.translateY = Math.min(Math.max(state.translateY, MIN_TRANSLATE_Y), MAX_TRANSLATE_Y);

                      image.style.transform = `scale(${state.scale}) translate(${state.translateX}px, ${state.translateY}px)`;
                      state.startX = x;
                      state.startY = y;
                  }
              }

              function handleTouchEnd(image: HTMLElement, state: ImageState) {
                  image.style.transition = 'transform 0.25s ease'; 
                  image.style.transform = `scale(${state.originalScale}) translate(${state.originalTranslateX}px, ${state.originalTranslateY}px)`; 
                  state.scale = state.originalScale; 
                  state.translateX = state.originalTranslateX; 
                  state.translateY = state.originalTranslateY;
              }

              this.zoomContainerRef.current.querySelectorAll('img').forEach((image: HTMLElement) => {
                  image.addEventListener('touchstart', (event) => handleTouchStart(event, image, this.state));
                  image.addEventListener('touchmove', (event) => handleTouchMove(event, image, this.state));
                  image.addEventListener('touchend', () => handleTouchEnd(image, this.state));

                  image.style.zIndex = '5000';
              });
          }
      }, 1000);
  };

  renderImage(){
    const { 
      id,
      className = "", 
      src, 
      alt, 
      loading, 
      decoding, 
      width, 
      height, 
      title, 
      srcSet, 
      sizes ,
      onLoad,
    } = this.props;

    return (
      <img
        data-e="Image"
        id={id}
        className={`img ${className}`}
        src={src}
        alt={alt ?? ''} 
        loading={loading} 
        decoding={decoding}
        width={width}
        height={height}
        title={title}
        srcSet={srcSet}
        sizes={sizes}
        onError={this.handleError}
        onLoad={onLoad}
      />
    )
  }

  renderNoImage(){
    const { 
      id,
      className = "", 
      width, 
      height, 
    } = this.props;
    return (
      <div id={id} className={`flex justify-center items-center  bg-neutral-100  ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-e="Image"
        width={width}
        height={height}
        viewBox={`0 0 120 120`}
        preserveAspectRatio="xMidYMid meet"
      >
        <path className='fill-neutral-100' d="M0 0h120v120H0z" />
        <path
          className='fill-neutral-400'
          fillRule="evenodd"
          d="M33.25 38.482a2.625 2.625 0 0 1 2.604-2.607h47.292a2.606 2.606 0 0 1 2.604 2.607v42.036a2.625 2.625 0 0 1-2.604 2.607H35.854a2.607 2.607 0 0 1-2.604-2.607V38.482Zm47.25 2.643h-42v36.75l24.392-24.397a2.625 2.625 0 0 1 3.712 0L80.5 67.401V41.125Zm-36.75 10.5a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 0 0-10.5 0Z"
          clipRule="evenodd"
        />
      </svg>
      </div>
    );
  }

  render() {
    const {  
      pinchZoom
    } = this.props;

    if (this.state.imageError) {
      return this.renderNoImage()
    }

    if(pinchZoom){
      return (
        <div ref={this.zoomContainerRef} className='relative'>
           {this.renderImage()}
        </div>
      )
    }

    return this.renderImage();
  }
}

export default Image;
