import React from 'react';
import { View, Page } from "@luminus/daisy"
import { createRoot } from 'react-dom/client';
import "./index.css"
import IntroBlock from './blocks/intro';
import ButtonBlock from "./blocks/button"
import BadgeBlock from './blocks/badge';
import AlertBlock from './blocks/alert';
import CarouselBlock from './blocks/carousel';
import Dropdown from './blocks/dropdown';

function App() {
  return (
    <Page className="bg-slate-100">
      <View className="p-4 container max-w-5xl m-auto">
        <IntroBlock />
        <Dropdown />
        <AlertBlock />
        <BadgeBlock />
        <ButtonBlock />
        <CarouselBlock />
      </View>
    </Page>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
