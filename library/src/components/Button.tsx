import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> & {
  Primary: React.FC<ButtonProps>;
  Secondary: React.FC<ButtonProps>;
} = ({ children, onClick, className }:ButtonProps) => {
  return (
    <button type="button" data-element="Button" onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

function withVariants(
  C: React.FC<ButtonProps>,
  flavorClass: string
): React.FC<ButtonProps> {
  const EnhancedComponent: React.FC<ButtonProps> = ({ children, onClick, className }) => (
    <C onClick={onClick} className={`${flavorClass} ${className || ''}`}>
      {children}
    </C>
  );
  EnhancedComponent.displayName = `Button${flavorClass}`;
  return EnhancedComponent;
}

Button.Primary = withVariants(Button, 'btn-primary');
Button.Secondary = withVariants(Button, 'btn-secondary');

export default Button;
