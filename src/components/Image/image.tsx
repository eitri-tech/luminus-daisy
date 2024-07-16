import React, { Component } from 'react';
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
}

class Image extends Component<ImageProps> {

  state = {
    imageError: false,
  };

  handleError = () => {
    this.setState({ imageError: true });
  };

  render() {
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
      sizes 
    } = this.props;

    if (this.state.imageError) {
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
      />
    );
  }
}

export default Image;
