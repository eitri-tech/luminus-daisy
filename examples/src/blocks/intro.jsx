import React from 'react';
import { Badge, View, Text, Stories } from "luminus-daisy"
import { Link } from 'react-router-dom'

export default function IntroBlock() {

  const stories = [
    {
      color: "orange",
      name: "Genéricos",
      image: "https://cdn.ultrafarma.com.br/static/produtos/99697/large-638083673048870565-99697.jpg",
      steps: [
        {
          id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
          content: "https://cdn.83io.com.br/library/luminus-ui/media/story_03.mp4",
          contentType: "video",
          cta: () => {
            alert("Video Action");
          }
        },
        // {
        //   id: "a987fb5a-4d04-451c-b5a2-e8860950e10a",
        //   content: "https://placehold.co/600x1400/3355cc/FFFFFF/jpg?text=Ibuprofeno",
        //   contentType: "image",
        //   cta: () => {
        //     alert("Image Action");
        //   }
        // },
      ]
    }
  ]

  return (
    <View className="bg-white p-4 flex flex-col row-auto ">
      <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
        <Text render="h1">Eitri DS</Text>
        <Text render="h4" className="font-bold">Luminus is a suite of visual components for building interfaces.</Text>
        <Text render="p">It is the official library used by Eitri for building Eitri-apps.</Text>
        <Badge className="badge-accent badge-outline">Versão 1.0</Badge>
        <Stories>
          {
            stories.map((story, index) => (
              <Stories.Item
                key={`story_${index}`} 
                name={story.name} 
                counterColor={story.color} 
                image={story.image}
                fullScreenImage={story.fullScreenImage}
                >
                {
                  story.steps.map((step, stepIndex) => (
                    <Stories.Step
                        key={`step_${stepIndex}_${index}`}
                        id={step.id}
                        content={step.content}
                        contentType={step.contentType}
                        cta={step.cta}
                    />
                  ))
                }
              </Stories.Item>
            ))
          }
        </Stories>
      </View>
      <View className="flex flex-col">
        <Link to="/button" className="btn-primary">Botão</Link>
        <Link to="/loading" className='btn-primary'>Loading</Link>
        <Link to="/badge" className='btn-primary'>Badge</Link>
        <Link to="/alert" className='btn-primary'>Alert</Link>
        <Link to="/carousel" className='btn-primary'>Carousel</Link>
        <Link to="/dropdown" className='btn-primary'>Dropdown</Link>
        <Link to="/modal" className='btn-primary'>Modal</Link>
        <Link to="/tab" className='btn-primary'>Tab</Link>
        <Link to="/progress" className='btn-primary'>Progress</Link>
        <Link to="/link" className='btn-primary'>Link</Link>
        <Link to="/steps" className='btn-primary'>Steps</Link>
        <Link to="/tooltip" className='btn-primary'>Tooltip</Link>
        <Link to="/toast" className='btn-primary'>Toast</Link>
        <Link to="/swap" className='btn-primary'>Swap</Link>
        <Link to="/checkbox" className='btn-primary'>Checkbox</Link>
        <Link to="/rating" className='btn-primary'>Rating</Link>
        <Link to="/radio" className='btn-primary'>Radio</Link>
        <Link to="/range" className='btn-primary'>Range</Link>
        <Link to="/fileinput" className='btn-primary'>Fileinput</Link>
        <Link to="/toggle" className='btn-primary'>Toggle</Link>
        <Link to="/textarea" className='btn-primary'>Textarea</Link>
        <Link to="/textinput" className='btn-primary'>Textinput</Link>
        <Link to="/card" className='btn-primary'>Card</Link>
        <Link to="/divider" className='btn-primary'>Divider</Link>
        <Link to="/breadcrumbs" className='btn-primary'>Breadcrumbs</Link>
        <Link to="/artboard" className='btn-primary'>Artboard</Link>
        <Link to="/browser" className='btn-primary'>Browser</Link>
        <Link to="/phone" className='btn-primary'>Phone</Link>
        <Link to="/accordion" className='btn-primary'>Accordion</Link>
        <Link to="/stats" className='btn-primary'>Stats</Link>
        <Link to="/mask" className='btn-primary'>Mask</Link>
        <Link to="/indicator" className='btn-primary'>Indicator</Link>
        <Link to="/image" className='btn-primary'>Image</Link>
        <Link to="/carouselimage" className='btn-primary'>Carouselimage</Link>
        <Link to="/view" className='btn-primary'>View</Link>
        <Link to="/collapse" className='btn-primary'>Collapse</Link>
        <Link to="/avatar" className='btn-primary'>Avatar</Link>
        <Link to="/skeleton" className='btn-primary'>Skeleton</Link>
        <Link to="/stack" className='btn-primary'>Stack</Link>
        <Link to="/chat" className='btn-primary'>Chat</Link>
        <Link to="/timeline" className='btn-primary'>Timeline</Link>
        <Link to="/diff" className='btn-primary'>Diff</Link>
        <Link to="/kbd" className='btn-primary'>Kbd</Link>
        <Link to="/hero" className='btn-primary'>Hero</Link>
        <Link to="/themecontroller" className='btn-primary'>Themecontroller</Link>
        <Link to="/countdown" className='btn-primary'>Countdown</Link>
        <Link to="/animator" className='btn-primary'>Animator</Link>
        <Link to="/htmlrender" className='btn-primary'>Htmlrender</Link>
        <Link to="/video" className='btn-primary'>Video</Link>
      </View>
    </View>
  );
}

