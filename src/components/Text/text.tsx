import React, { Component } from 'react';
import CommonProps from '../commonProps';
import ColorUtils from '../../utilities/ColorUtils';

/**
 * Properties for the Text component.
 * Extends CommonProps.
 */
interface TextProps extends CommonProps {

  /**
   * The element to render.
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content
   */
  render?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'em' | 'blockquote' | 'code' | 'kbd' | 'samp' | 'var' | 'del' | 'ins' | 'mark' | 'small' | 'sub' | 'sup';
}

/**
 * The Text component.
 * Most basic text component in the library.
 */
class Text extends Component<TextProps> {
  render() {
    const { id, render = 'span', children, className = "" } = this.props;
    const Component = render as keyof JSX.IntrinsicElements;

    let classNameText = ""
    if(className && ColorUtils.classNameHaveTextColor(className)){
      classNameText = className;
    }else{
      classNameText = "";
    }

    return (
      <Component data-e="Text" id={id} className={classNameText} data-element={`Text.${render}`}>
        {children}
      </Component>
    );
  }
}

export default Text;
