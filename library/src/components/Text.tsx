import React, { ReactNode } from 'react';

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'em' | 'blockquote' | 'code' | 'kbd' | 'samp' | 'var' | 'del' | 'ins' | 'mark' | 'small' | 'sub' | 'sup';
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Declaração do componente Text, incluindo os subcomponentes
interface TextComponent extends React.FC<TextProps> {
  H1: React.FC<Omit<TextProps, 'as'>>;
  H2: React.FC<Omit<TextProps, 'as'>>;
  H3: React.FC<Omit<TextProps, 'as'>>;
  H4: React.FC<Omit<TextProps, 'as'>>;
  H5: React.FC<Omit<TextProps, 'as'>>;
  H6: React.FC<Omit<TextProps, 'as'>>;
  P: React.FC<Omit<TextProps, 'as'>>;
  Span: React.FC<Omit<TextProps, 'as'>>;
  Strong: React.FC<Omit<TextProps, 'as'>>;
  Em: React.FC<Omit<TextProps, 'as'>>;
  Blockquote: React.FC<Omit<TextProps, 'as'>>;
  Code: React.FC<Omit<TextProps, 'as'>>;
  Kbd: React.FC<Omit<TextProps, 'as'>>;
  Samp: React.FC<Omit<TextProps, 'as'>>;
  Var: React.FC<Omit<TextProps, 'as'>>;
  Del: React.FC<Omit<TextProps, 'as'>>;
  Ins: React.FC<Omit<TextProps, 'as'>>;
  Mark: React.FC<Omit<TextProps, 'as'>>;
  Small: React.FC<Omit<TextProps, 'as'>>;
  Sub: React.FC<Omit<TextProps, 'as'>>;
  Sup: React.FC<Omit<TextProps, 'as'>>;
}

const Text: TextComponent = ({ as = 'span', children, className, style }) => {
  const Component = as;
  return <Component className={className} style={style} data-element={`Text.${as}`}>{children}</Component>;
};

// Definição dos subcomponentes
Text.H1 = (props: Omit<TextProps, 'as'>) => <Text as="h1" {...props} />;
Text.H2 = (props: Omit<TextProps, 'as'>) => <Text as="h2" {...props} />;
Text.H3 = (props: Omit<TextProps, 'as'>) => <Text as="h3" {...props} />;
Text.H4 = (props: Omit<TextProps, 'as'>) => <Text as="h4" {...props} />;
Text.H5 = (props: Omit<TextProps, 'as'>) => <Text as="h5" {...props} />;
Text.H6 = (props: Omit<TextProps, 'as'>) => <Text as="h6" {...props} />;
Text.P = (props: Omit<TextProps, 'as'>) => <Text as="p" {...props} />;
Text.Span = (props: Omit<TextProps, 'as'>) => <Text as="span" {...props} />;
Text.Strong = (props: Omit<TextProps, 'as'>) => <Text as="strong" {...props} />;
Text.Em = (props: Omit<TextProps, 'as'>) => <Text as="em" {...props} />;
Text.Blockquote = (props: Omit<TextProps, 'as'>) => <Text as="blockquote" {...props} />;
Text.Code = (props: Omit<TextProps, 'as'>) => <Text as="code" {...props} />;
Text.Kbd = (props: Omit<TextProps, 'as'>) => <Text as="kbd" {...props} />;
Text.Samp = (props: Omit<TextProps, 'as'>) => <Text as="samp" {...props} />;
Text.Var = (props: Omit<TextProps, 'as'>) => <Text as="var" {...props} />;
Text.Del = (props: Omit<TextProps, 'as'>) => <Text as="del" {...props} />;
Text.Ins = (props: Omit<TextProps, 'as'>) => <Text as="ins" {...props} />;
Text.Mark = (props: Omit<TextProps, 'as'>) => <Text as="mark" {...props} />;
Text.Small = (props: Omit<TextProps, 'as'>) => <Text as="small" {...props} />;
Text.Sub = (props: Omit<TextProps, 'as'>) => <Text as="sub" {...props} />;
Text.Sup = (props: Omit<TextProps, 'as'>) => <Text as="sup" {...props} />;

export default Text;
