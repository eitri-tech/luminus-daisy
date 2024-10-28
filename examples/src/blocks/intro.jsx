import React from 'react';
import { Badge, View, Text } from "luminus-daisy"
import { Link } from 'react-router-dom'

export default function IntroBlock() {

  return (
    <View className="p-4 flex flex-col row-auto ">
      <View className="prose mb-4 rounded-sm container max-w-5xl m-auto">
        <Text render="h1">Eitri DS</Text>
        <Text render="h4" className="font-bold">Luminus is a suite of visual components for building interfaces.</Text>
        <Text render="p">It is the official library used by Eitri for building Eitri-apps.</Text>
        <Badge className="badge-accent">Versão 1.0</Badge>
      </View>
      <View className="flex flex-col ">
        <Link to="/button" className="btn mb-4">Botão</Link>
        <Link to="/loading" className='btn mb-4'>Loading</Link>
        <Link to="/badge" className='btn mb-4'>Badge</Link>
        <Link to="/alert" className='btn mb-4'>Alert</Link>
        <Link to="/carousel" className='btn mb-4'>Carousel</Link>
        <Link to="/dropdown" className='btn mb-4'>Dropdown</Link>
        <Link to="/modal" className='btn mb-4'>Modal</Link>
        <Link to="/tab" className='btn mb-4'>Tab</Link>
        <Link to="/progress" className='btn mb-4'>Progress</Link>
        <Link to="/link" className='btn mb-4'>Link</Link>
        <Link to="/steps" className='btn mb-4'>Steps</Link>
        <Link to="/tooltip" className='btn mb-4'>Tooltip</Link>
        <Link to="/toast" className='btn mb-4'>Toast</Link>
        <Link to="/swap" className='btn mb-4'>Swap</Link>
        <Link to="/checkbox" className='btn mb-4'>Checkbox</Link>
        <Link to="/rating" className='btn mb-4'>Rating</Link>
        <Link to="/radio" className='btn mb-4'>Radio</Link>
        <Link to="/range" className='btn mb-4'>Range</Link>
        <Link to="/fileinput" className='btn mb-4'>Fileinput</Link>
        <Link to="/toggle" className='btn mb-4'>Toggle</Link>
        <Link to="/textarea" className='btn mb-4'>Textarea</Link>
        <Link to="/textinput" className='btn mb-4'>Textinput</Link>
        <Link to="/card" className='btn mb-4'>Card</Link>
        <Link to="/divider" className='btn mb-4'>Divider</Link>
        <Link to="/breadcrumbs" className='btn mb-4'>Breadcrumbs</Link>
        <Link to="/artboard" className='btn mb-4'>Artboard</Link>
        <Link to="/browser" className='btn mb-4'>Browser</Link>
        <Link to="/phone" className='btn mb-4'>Phone</Link>
        <Link to="/accordion" className='btn mb-4'>Accordion</Link>
        <Link to="/stats" className='btn mb-4'>Stats</Link>
        <Link to="/mask" className='btn mb-4'>Mask</Link>
        <Link to="/indicator" className='btn mb-4'>Indicator</Link>
        <Link to="/image" className='btn mb-4'>Image</Link>
        <Link to="/carouselimage" className='btn mb-4'>Carouselimage</Link>
        <Link to="/view" className='btn mb-4'>View</Link>
        <Link to="/collapse" className='btn mb-4'>Collapse</Link>
        <Link to="/avatar" className='btn mb-4'>Avatar</Link>
        <Link to="/skeleton" className='btn mb-4'>Skeleton</Link>
        <Link to="/stack" className='btn mb-4'>Stack</Link>
        <Link to="/chat" className='btn mb-4'>Chat</Link>
        <Link to="/timeline" className='btn mb-4'>Timeline</Link>
        <Link to="/diff" className='btn mb-4'>Diff</Link>
        <Link to="/kbd" className='btn mb-4'>Kbd</Link>
        <Link to="/hero" className='btn mb-4'>Hero</Link>
        <Link to="/themecontroller" className='btn mb-4'>Themecontroller</Link>
        <Link to="/countdown" className='btn mb-4'>Countdown</Link>
        <Link to="/animator" className='btn mb-4'>Animator</Link>
        <Link to="/htmlrender" className='btn mb-4'>Htmlrender</Link>
        <Link to="/video" className='btn mb-4'>Video</Link>
      </View>
    </View>
  );
}

