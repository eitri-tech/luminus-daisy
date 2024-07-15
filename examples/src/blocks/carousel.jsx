import React from 'react';
import { View, Text, Carousel, Image } from "luminus-daisy"

export default function CarouselBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white prose prose-slate">
        <Text render="h3">Carousel</Text>
        <Carousel>
          <Carousel.Item>
            <Image src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
          </Carousel.Item>
          <Carousel.Item >
            <Image src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
          </Carousel.Item>
          <Carousel.Item >
            <Image src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
          </Carousel.Item>
          <Carousel.Item >
            <Image src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
          </Carousel.Item>
          <Carousel.Item >
            <Image src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
          </Carousel.Item>
        </Carousel>
    </View>
  );
}

