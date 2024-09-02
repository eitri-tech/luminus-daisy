import React, {Component} from 'react';
import CommonProps from '../../commonProps'

interface AvatarProps extends CommonProps {
}

interface ImageProps extends AvatarProps {
  src: string;
  alt?: string;
}

class Image extends Component<ImageProps> {
  render() {
    const {
      src,
      className = "",
      alt = "avatar",
    } = this.props;
    return (
      <div className={`w-24 ${className}`}>
        <img src={src} alt={alt} />
      </div>
    );
  }
}

class Avatar extends Component<AvatarProps> {

  static Image = Image;

  render() {
    const {
      className = "",
      id,
    } = this.props;
    return (
      <div data-e="Avatar" id={id} className={`avatar ${className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Avatar;
