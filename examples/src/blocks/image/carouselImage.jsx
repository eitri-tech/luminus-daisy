import React from 'react';
import {CarouselImage, View, Text} from "luminus-daisy"

export default function CarouselImageBlock() {

    const images = [
        {
            src: "https://picsum.photos/200",
            alt: "Image 1"
        },
        {
            src: "https://picsum.photos/201",
            alt: "Image 2"
        },
        {
            src: "https://picsum.photos/202",
            alt: "Image 3"
        },
        {
            src: "https://picsum.photos/203",
            alt: "Image 4"
        },
        {
            src: "https://picsum.photos/204",
            alt: "Image 5"
        },
        {
            src: "https://picsum.photos/205",
            alt: "Image 6"
        },
        {
            src: "https://picsum.photos/206",
            alt: "Image 7"
        },
        {
            src: "https://picsum.photos/207",
            alt: "Image 8"
        },
        {
            src: "https://picsum.photos/208",
            alt: "Image 9"
        },
    ]

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Carousel Image</Text>

                <Text render="p">A simple image</Text>
                <CarouselImage
                    images={images}
                    itemClassName="w-full"
                />

                <div className='mt-2 mb-2'></div>

                <Text>A carousel with bullets</Text>
                <CarouselImage
                    images={images}
                    itemClassName="w-full"
                    showBullets={true}
                />

                <div className='mt-2 mb-2'></div>

                <Text>A carousel with counter</Text>
                <CarouselImage
                    images={images}
                    itemClassName="w-full"
                    showCounter={true}
                />
            </View>
        </View>
    );
}