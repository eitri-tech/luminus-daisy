import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css"
import { View, Text, Page } from "luminus-daisy"
import ButtonBlock from "./blocks/button"

function App() {
  return (
    <Page className="bg-slate-100">
      <View className="p-4 container max-w-5xl m-auto">
        <View className="prose prose-slate mb-4">
          <Text.H1>Luminus Daisy</Text.H1>
          <Text.P>Luminus is a suite of visual components for building interfaces.</Text.P>
          <Text.P>It is the official library used by Eitri for building Eitri-apps.</Text.P>
        </View>
        <View className="prose mt-4">
          <Text.H2>Component List</Text.H2>
        </View>
        <ButtonBlock />
      </View>
    </Page>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
