import React from 'react';
import {View, Page, Text} from "luminus-daisy"
import {createRoot} from 'react-dom/client';
import "./index.css"
import IntroBlock from './blocks/intro';
import ButtonBlock from "./blocks/button"
import BadgeBlock from './blocks/badge';
import AlertBlock from './blocks/alert';
import CarouselBlock from './blocks/carousel';
import DropdownBlock from './blocks/dropdown';
import ModalBlock from './blocks/modal';
import TabBlock from './blocks/tab';
import ProgressBlock from './blocks/progress';
import LinkBlock from './blocks/link';
import SwapBlock from './blocks/actions/swap';

function App() {
  return (
    <Page className="bg-slate-100">
      <IntroBlock />
      <View className="p-4 container max-w-5xl m-auto">

        <Text className="text-2xl font-bold text-slate-900">Actions</Text>
        <SwapBlock />

        <DropdownBlock />
        <ModalBlock />
        <AlertBlock />
        <BadgeBlock />
        <TabBlock />
        <ButtonBlock />
        <LinkBlock />
        <CarouselBlock />
        <ProgressBlock />
      </View>
    </Page>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
