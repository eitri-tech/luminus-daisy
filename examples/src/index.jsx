import React from 'react';
import "./index.css"
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import {  View, Page, Text, Badge, Divider  } from "luminus-daisy"
import {  createRoot  } from 'react-dom/client';
import IntroBlock from './blocks/intro';
import ButtonBlock from "./blocks/button";
import LoadingBlock from "./blocks/feedback/loading";
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
import CheckboxBlock from './blocks/dataInput/checkbox';
import RatingBlock from './blocks/dataInput/rating';
import RadioBlock from './blocks/dataInput/radio';
import RangeBlock from './blocks/dataInput/range';
import FileInputBlock from './blocks/dataInput/fileInput';
import ToggleBlock from './blocks/dataInput/toggle';
import TextareaBlock from './blocks/dataInput/textarea';
import TextInputBlock from './blocks/dataInput/textInput';
import CardBlock from './blocks/dataDisplay/card';
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
import ThemeControllerBlock from './blocks/actions/themeController';
import CountdownBlock from './blocks/dataDisplay/countdown';
import AnimatorBlock from './blocks/dataDisplay/animator';
import HTMLRenderBlock from './blocks/others/htmlrender';
import VideoBlock from './blocks/others/video';
import Menu from './blocks/menu';

function App() {
  return (
    <Page title="Eitri - Luminus DaisyUI">
      <HashRouter>
      <View className="bg-neutral-300">
      <View className="w-full max-w-7xl mx-auto bg-neutral">
        <View className="w-full border-b border-neutral-300">
        <View className="p-4">
          <Link to="/">
            <Text render="h1">Luminus 2</Text>
          </Link>
          <Text render="h4" className="font-bold">Luminus is a suite of visual components for building interfaces.</Text>
          <Text render="p">It is the official library used by Eitri for building Eitri-apps.</Text>
          <Badge className="badge-accent">Version 2.0</Badge>
          </View>
        </View>
        <View className="flex">
          <View className="flex flex-col w-1/5 p-4 border-r border-neutral-300">
            <Menu />
          </View>
          <View className="p-4 w-4/5 flex-grow">
            <Routes>
              <Route path="/" element={<IntroBlock />} />
              <Route path="/button" element={<ButtonBlock />} />
              <Route path="/loading" element={<LoadingBlock />} />
              <Route path="/badge" element={<BadgeBlock />} />
              <Route path="/alert" element={<AlertBlock />} />
              <Route path="/carousel" element={<CarouselBlock />} />
              <Route path="/dropdown" element={<DropdownBlock />} />
              <Route path="/modal" element={<ModalBlock />} />
              <Route path="/tab" element={<TabBlock />} />
              <Route path="/progress" element={<ProgressBlock />} />
              <Route path="/link" element={<LinkBlock />} />
              <Route path="/steps" element={<StepsBlock />} />
              <Route path="/tooltip" element={<TooltipBlock />} />
              <Route path="/toast" element={<ToastBlock />} />
              <Route path="/swap" element={<SwapBlock />} />
              <Route path="/checkbox" element={<CheckboxBlock />} />
              <Route path="/rating" element={<RatingBlock />} />
              <Route path="/radio" element={<RadioBlock />} />
              <Route path="/range" element={<RangeBlock />} />
              <Route path="/fileinput" element={<FileInputBlock />} />
              <Route path="/toggle" element={<ToggleBlock />} />
              <Route path="/textarea" element={<TextareaBlock />} />
              <Route path="/textinput" element={<TextInputBlock />} />
              <Route path="/card" element={<CardBlock />} />
              <Route path="/divider" element={<DividerBlock />} />
              <Route path="/breadcrumbs" element={<BreadcrumbsBlock />} />
              <Route path="/artboard" element={<ArtboardBlock />} />
              <Route path="/browser" element={<BrowserBlock />} />
              <Route path="/phone" element={<PhoneBlock />} />
              <Route path="/accordion" element={<AccordionBlock />} />
              <Route path="/stats" element={<StatsBlock />} />
              <Route path="/mask" element={<MaskBlock />} />
              <Route path="/indicator" element={<IndicatorBlock />} />
              <Route path="/image" element={<ImageBlock />} />
              <Route path="/carouselimage" element={<CarouselImageBlock />} />
              <Route path="/view" element={<ViewBlock />} />
              <Route path="/collapse" element={<CollapseBlock />} />
              <Route path="/avatar" element={<AvatarBlock />} />
              <Route path="/skeleton" element={<SkeletonBlock />} />
              <Route path="/stack" element={<StackBlock />} />
              <Route path="/chat" element={<ChatBlock />} />
              <Route path="/timeline" element={<TimelineBlock />} />
              <Route path="/diff" element={<DiffBlock />} />
              <Route path="/kbd" element={<KbdBlock />} />
              <Route path="/hero" element={<HeroBlock />} />
              <Route path="/themecontroller" element={<ThemeControllerBlock />} />
              <Route path="/countdown" element={<CountdownBlock />} />
              <Route path="/animator" element={<AnimatorBlock />} />
              <Route path="/htmlrender" element={<HTMLRenderBlock />} />
              <Route path="/video" element={<VideoBlock />} />
            </Routes>
          </View>
        </View>
      </View>
      </View>
      </HashRouter>
    </Page>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
