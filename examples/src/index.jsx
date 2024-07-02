import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css"
import { View, Text } from "luminus"
import ButtonBlock from "./blocks/button"

function App() {
  return (
    <View className="p-4">
      <View className="prose prose-slate mb-4">
        <Text.H1>Luminus UI</Text.H1>
        <Text.P>Luminus is a suite of visual components for building interfaces. It is the official library used by Eitri for building Eitri-apps.</Text.P>
      </View>
      <ButtonBlock />
    </View>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
