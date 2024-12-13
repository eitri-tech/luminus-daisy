import React, {useState} from 'react';
import { View, Text, Carousel, Image, Button } from "luminus-daisy"

export default function CarouselBlock() {

  const [index, setIndex] = useState()
  const [clicked, setClicked] = useState()

  const imageList = [
    {url: "https://fakeimg.pl/600x400/ff9999/909090", name: "Image 01"},
    {url: "https://fakeimg.pl/600x400/eb99ff/909090", name: "Image 02"},
    {url: "https://fakeimg.pl/600x400/99a5ff/909090", name: "Image 03"},
    {url: "https://fakeimg.pl/600x400/99ffe4/909090", name: "Image 04"},
    {url: "https://fakeimg.pl/600x400/c2ff99/909090", name: "Image 05"},
  ]

  const onSwipe = (i) => {
    console.log('Index showed', i);
    try{
      setIndex(imageList[i]?.name)
    } catch(error){
      console.log('error', error);
    }
  }

  const onClick = (value) => {
    console.log('Clicked Item', value);
    setClicked(value.name)
  }

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md  prose prose-slate">
        <Text render="h3" className="mb-2">Carousel</Text>
        <Text render="p" className="mb-4">Index showed: {index}</Text>
        <Text render="p" className="mb-4">Clicked Item: {clicked}</Text>
        <Carousel onSwipe={onSwipe} index={index}>
          {
            imageList.map(image => (
              <Carousel.Item className="w-full" key={`image_${image.name}`}>
                <View onClick={() => {onClick(image)}}>
                  <Image className="w-full" src={image.url} alt="Burger" />
                </View>
              </Carousel.Item>
            ))
          }
        </Carousel>
        <Button onClick={() => { setIndex(3)}}>Mudar Slide</Button>
    </View>
  );
}

