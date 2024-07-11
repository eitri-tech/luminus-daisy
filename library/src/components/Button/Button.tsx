import React from 'react';
import CommonProps from '../commonProps';

interface ButtonProps extends CommonProps {
  onClick?: () => void;
}


/**
 * Display a Button
 */
const Button: React.FC<ButtonProps> & {
  Primary: React.FC<ButtonProps>;
  Secondary: React.FC<ButtonProps>;
} = ({ children, onClick, className = "", id }:ButtonProps) => {
  return (
    <button data-e="Button" id={id} type="button" data-element="Button" onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

function withVariants(
  C: React.FC<ButtonProps>,
  variantClass: string
): React.FC<ButtonProps> {
  const EnhancedComponent: React.FC<ButtonProps> = ({ children, onClick, className = "", id }) => (
    <C data-e="Button" id={id} onClick={onClick} className={`${variantClass} ${className || ''}`}>
      {children}
    </C>
  );
  EnhancedComponent.displayName = `Button${variantClass}`;
  return EnhancedComponent;
}

Button.Primary = withVariants(Button, 'btn-primary');
Button.Secondary = withVariants(Button, 'btn-secondary');

export default Button;
