import React, { Component } from 'react';
import CommonProps from '../commonProps';

interface ImageProps extends Omit<CommonProps, 'children'> {
  src: string;
  alt?: string;
  loading?: 'eager' | 'lazy'; 
  decoding?: 'sync' | 'async';
  width?: number;
  height?: number;
  title?: string;
  srcSet?: string;
  sizes?: string;
}

class Image extends Component<ImageProps> {
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

    return (
      <img
        data-e="Image"
        id={id}
        className={`carousel ${className}`}
        src={src}
        alt={alt ?? ''} 
        loading={loading} 
        decoding={decoding}
        width={width}
        height={height}
        title={title}
        srcSet={srcSet}
        sizes={sizes}
      />
    );
  }
}

export default Image;
