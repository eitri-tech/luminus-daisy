import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * Display a Button
 */
const Button: React.FC<ButtonProps> & {
  Primary: React.FC<ButtonProps>;
  Secondary: React.FC<ButtonProps>;
} = ({ children, onClick, className }) => {
  return (
    <button type="button" data-element="Button" onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

function withVariants(
  Component: React.FC<ButtonProps>,
  variantClass: string
): React.FC<ButtonProps> {
  return (props) => (
    <Component {...props} className={`${variantClass} ${props.className || ''}`} />
  );
}

Button.Primary = withVariants(Button, 'btn-primary');
Button.Secondary = withVariants(Button, 'btn-secondary');

export default Button;
