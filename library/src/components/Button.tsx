import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // Tornando className opcional
}

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

// HOC para criar os sabores
function withVariants(
  Component: React.FC<ButtonProps>,
  flavorClass: string
): React.FC<ButtonProps> {
  return (props) => (
    <Component {...props} className={`${flavorClass} ${props.className || ''}`} />
  );
}

// Criando os sabores
Button.Primary = withVariants(Button, 'btn-primary');
Button.Secondary = withVariants(Button, 'btn-secondary');

export default Button;
