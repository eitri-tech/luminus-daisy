import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css"
import { Button, View, Text } from "luminus"

function App() {
  return (
    <View className="p-4">
      <View className="prose prose-slate">
        <Text.H1 className="bg-primary p-4">Olá, mundo!</Text.H1>
        <Text.P>Olá, mundo!</Text.P>
        <Text.Span>Olá, mundo!</Text.Span>
      </View>
      <Button.Primary>Botão</Button.Primary>
      <Button>Botão</Button>
      
    </View>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
