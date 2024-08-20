import React, {useState} from 'react';
import { View, Text, Carousel, Image, Button } from "luminus-daisy"

export default function CarouselBlock() {

  const [index, setIndex] = useState()


  const onSwipe = (i) => {
    setIndex(i)
  }

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white prose prose-slate">
        <Text render="h3" className="mb-2">Carousel</Text>
        <Text render="p" className="mb-4">Índice mostrado {index}</Text>
        <Carousel onSwipe={onSwipe} index={index}>
          <Carousel.Item className="w-full">
            <Image className="w-full" src="https://fakeimg.pl/600x400/ff9999/909090" alt="Burger" />
          </Carousel.Item>
          <Carousel.Item  className="w-full">
            <Image className="w-full" src="https://fakeimg.pl/600x400/eb99ff/909090" alt="Burger" />
          </Carousel.Item>
          <Carousel.Item  className="w-full">
            <Image className="w-full" src="https://fakeimg.pl/600x400/99a5ff/909090" alt="Burger" />
          </Carousel.Item>
          <Carousel.Item  className="w-full">
            <Image className="w-full" src="https://fakeimg.pl/600x400/99ffe4/909090" alt="Burger" />
          </Carousel.Item>
          <Carousel.Item  className="w-full">
            <Image className="w-full" src="https://fakeimg.pl/600x400/c2ff99/909090" alt="Burger" />
          </Carousel.Item>
        </Carousel>
        <Button onClick={() => { setIndex(3)}}>Mudar Slide</Button>
    </View>
  );
}

