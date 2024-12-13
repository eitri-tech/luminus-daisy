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

  static prepareTextClassNames(renderTag: string): string | undefined{

    if(renderTag === "h1"){
      return "text-4xl leading-relaxed font-bold mb-4 mt-2";
    }
    if(renderTag === "h2"){
      return "text-3xl leading-relaxed font-bold mb-4 mt-2";
    }
    if(renderTag === "h3"){
      return "text-2xl leading-relaxed font-bold mb-4 mt-2";
    }
    if(renderTag === "h4"){
      return "text-xl leading-relaxed font-bold mb-4 mt-2";
    }
    if(renderTag === "h5"){
      return "text-lg leading-relaxed font-bold mb-4 mt-2";
    }
    if(renderTag === "h6"){
      return "text-base leading-relaxed font-bold mb-4 mt-2";
    }
    if(renderTag === "p"){
      return "text-base mb-2";
    }
    if(renderTag === "span"){
      return "text-base";
    }
    if(renderTag === "strong"){
      return "font-bold";
    }
    if(renderTag === "em"){
      return "italic";
    }
    if(renderTag === "blockquote"){
      return "text-base italic mb-2";
    }
    if(renderTag === "code"){
      return "text-sm";
    }
    if(renderTag === "kbd"){
      return "text-sm";
    }
    if(renderTag === "samp"){
      return "text-sm leading-tight";
    }
    if(renderTag === "var"){
      return "text-sm leading-tight";
    }
    if(renderTag === "del"){
      return "line-through";
    }
    if(renderTag === "ins"){
      return "underline";
    }
    if(renderTag === "mark"){
      return "bg-yellow-200 text-yellow-900";
    }
    if(renderTag === "small"){
      return "text-sm";
    }
    if(renderTag === "sub"){
      return "text-xs leading-tight";
    }
    if(renderTag === "sup"){
      return "text-xs leading-tight";
    }

  }


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
      <Component data-e="Text" id={id} className={`${Text.prepareTextClassNames(render)} ${render} ${classNameText}`}>
        {children}
      </Component>
    );
  }
}

export default Text;
