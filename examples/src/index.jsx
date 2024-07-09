import React from 'react';
import { View, Text, Page, Badge } from "@luminus/daisy"
import { createRoot } from 'react-dom/client';
import "./index.css"
import ButtonBlock from "./blocks/button"

function App() {
  return (
    <Page className="bg-slate-100">
      <View className="p-4 container max-w-5xl m-auto">
        <View className="prose prose-slate mb-4">
          <Text render="h1">Luminus Daisy</Text>
          <Text render="p">Luminus is a suite of visual components for building interfaces.</Text>
          <Text render="p">It is the official library used by Eitri for building Eitri-apps.</Text>
          <Badge>Versão 1.0</Badge>
        </View>
        <View className="prose mt-4">
          <Text render="h2">Component List</Text>
        </View>
        <ButtonBlock />
      </View>
    </Page>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
