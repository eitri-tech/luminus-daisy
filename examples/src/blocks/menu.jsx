import React from 'react';
import { View, Text } from "luminus-daisy"
import { Link } from 'react-router-dom'
export default function Menu() {

  return (
    <View className="prose">
          <Text render="h2">Components</Text>

          <Text render="h3">Actions</Text>
          <View className="flex gap-2 flex-col">
            <Link to="/button" className="">Button</Link>
            <Link to="/dropdown" className=''>Dropdown</Link>
            <Link to="/modal" className=''>Modal</Link>
            <Link to="/swap" className=''>Swap</Link>
            <Link to="/tooltip" className=''>Tooltip</Link>
            <Link to="/breadcrumbs" className=''>Breadcrumbs</Link>
            <Link to="/steps" className=''>Steps</Link>
            <Link to="/link" className=''>Link</Link>
            <Link to="/divider" className=''>Divider</Link>
          </View>


          <Text render="h3">Data Input</Text>
          <View className="flex gap-2 flex-col">
            <Link to="/checkbox" className=''>Checkbox</Link>
            <Link to="/rating" className=''>Rating</Link>
            <Link to="/radio" className=''>Radio</Link>
            <Link to="/range" className=''>Range</Link>
            <Link to="/fileinput" className=''>Fileinput</Link>
            <Link to="/toggle" className=''>Toggle</Link>
            <Link to="/textarea" className=''>Textarea</Link>
            <Link to="/textinput" className=''>Textinput</Link>
          </View>

          <Text render="h3">Images</Text>
          <View className="flex gap-2 flex-col">
            <Link to="/image" className=''>Image</Link>
            <Link to="/carouselimage" className=''>Carouselimage</Link>
          </View>

          <Text render="h3">Layout</Text>
          <View className="flex gap-2 flex-col">
            <Link to="/artboard" className=''>Artboard</Link>
            <Link to="/view" className=''>View</Link>
            <Link to="/collapse" className=''>Collapse</Link>
            <Link to="/card" className=''>Card</Link>
            <Link to="/skeleton" className=''>Skeleton</Link>
            <Link to="/stack" className=''>Stack</Link>
            <Link to="/loading" className=''>Loading</Link>
            <Link to="/indicator" className=''>Indicator</Link>
            <Link to="/badge" className=''>Badge</Link>
            <Link to="/alert" className=''>Alert</Link>
            <Link to="/carousel" className=''>Carousel</Link>
            <Link to="/tab" className=''>Tab</Link>
            <Link to="/progress" className=''>Progress</Link>
          </View>

          <Text render="h3">Mockup</Text>
          <View className="flex gap-2 flex-col">
            <Link to="/browser" className=''>Browser</Link>
            <Link to="/phone" className=''>Phone</Link>
            <Link to="/avatar" className=''>Avatar</Link>
            <Link to="/stats" className=''>Stats</Link>
            <Link to="/mask" className=''>Mask</Link>
            <Link to="/chat" className=''>Chat</Link>
            <Link to="/timeline" className=''>Timeline</Link>
            <Link to="/toast" className=''>Toast</Link>
          </View>
          
          <Text render="h3">Others</Text>
          <View className="flex gap-2 flex-col">
            <Link to="/htmlrender" className=''>Htmlrender</Link>
            <Link to="/video" className=''>Video</Link>
            <Link to="/countdown" className=''>Countdown</Link>
            <Link to="/animator" className=''>Animator</Link>
            <Link to="/themecontroller" className=''>Themecontroller</Link>
            <Link to="/kbd" className=''>Kbd</Link>
            <Link to="/diff" className=''>Diff</Link>
            <Link to="/hero" className=''>Hero</Link>
          </View>
        </View>
  );
}

