import React from 'react';
import {View, Page, Text, Header} from "luminus-daisy"
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
import StepsBlock from './blocks/navigation/steps';

import TooltipBlock from './blocks/feedback/tooltip';
import ToastBlock from './blocks/feedback/toast';

import SwapBlock from './blocks/actions/swap';
import CheckboxBlock from './blocks/dataInput/checbox';
import RatingBlock from './blocks/dataInput/rating';
import RadioBlock from './blocks/dataInput/radio';
import RangeBlock from './blocks/dataInput/range';
import FileInputBlock from './blocks/dataInput/fileInput';
import ToggleBlock from './blocks/dataInput/toggle';
import TextareaBlock from './blocks/dataInput/textarea';
import TextInputBlock from './blocks/dataInput/textInput';

import DividerBlock from './blocks/layout/divider';
import BreadcrumbsBlock from './blocks/navigation/breadcrumbs';
import ArtboardBlock from './blocks/layout/artboard';

import BrowserBlock from './blocks/mockup/browser';
import PhoneBlock from './blocks/mockup/phone';

import AccordionBlock from './blocks/dataDisplay/accordion';
import StatsBlock from './blocks/dataDisplay/stats';
import MaskBlock from './blocks/layout/mask';
import IndicatorBlock from './blocks/layout/indicator';
import ImageBlock from './blocks/image/image';
import CarouselImageBlock from './blocks/image/carouselImage';
import ViewBlock from './blocks/view';
import CollapseBlock from './blocks/dataDisplay/collapse';
import AvatarBlock from './blocks/dataDisplay/avatar';
import SkeletonBlock from './blocks/feedback/skeleton';
import StackBlock from './blocks/layout/stack';
import ChatBlock from './blocks/dataDisplay/chat';
import TimelineBlock from './blocks/dataDisplay/timeline';
import DiffBlock from './blocks/dataDisplay/diff';
import KbdBlock from './blocks/dataDisplay/kbd';
import HeroBlock from './blocks/layout/hero';

function App() {
  return (
    <Page topInset={40} bottomInset={40} topInsetColor="#000" bottomInsetColor="#000" title="Eitri - Luminus DaisyUI">
      <Header>
        <View>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </View>
        <View>
          <Text className="text-2xl font-bold">MyApp</Text>
        </View>
        <View>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </View>
      </Header>
      <IntroBlock />
      <View className="p-4 container max-w-5xl m-auto">

        <Text className="text-2xl font-bold text-slate-900">View</Text>
        <ViewBlock />

        <Text className="text-2xl font-bold text-slate-900">Image</Text>
        <ImageBlock />
        <CarouselImageBlock />

        <Text className="card-title text-4xl font-bold text-slate-900">Actions</Text>
        <SwapBlock />
        <DropdownBlock />
        <ModalBlock />
        <ButtonBlock />

        <div className="divider"></div>

        <Text className="card-title text-4xl font-bold text-slate-900">Data Display</Text>
        <BadgeBlock />
        <CarouselBlock />
        <AccordionBlock />
        <StatsBlock />
        <MaskBlock />
        <IndicatorBlock />
        <CollapseBlock />
        <AvatarBlock />
        <ChatBlock />
        <TimelineBlock />
        <DiffBlock />
        <KbdBlock />

        <div className="divider"></div>

        <Text className="text-4xl font-bold text-slate-900">Feedback</Text>
        <AlertBlock />
        <ProgressBlock />
        <TooltipBlock />
        <SkeletonBlock />
        <ToastBlock />

        <div className="divider"></div>

        <Text className="text-2xl font-bold text-slate-900">Navigation</Text>
        <TabBlock />
        <LinkBlock />
        <StepsBlock />
        <BreadcrumbsBlock />

        <Text className="text-2xl font-bold text-slate-900">Data input</Text>
        <CheckboxBlock />
        <RatingBlock />
        <RadioBlock />
        <RangeBlock />
        <FileInputBlock />
        <ToggleBlock />
        <TextareaBlock />
        <TextInputBlock />

        <Text className="text-2xl font-bold text-slate-900">Layout</Text>
        <DividerBlock />
        <ArtboardBlock />
        <StackBlock />
        <HeroBlock />

        <Text className="text-2xl font-bold text-slate-900">Mockup</Text>
        <BrowserBlock />
        <PhoneBlock />

      </View>
    </Page>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
