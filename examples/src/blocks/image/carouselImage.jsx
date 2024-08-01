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
        {
            src: "https://picsum.photos/209",
            alt: "Image 10"
        },
        {
            src: "https://picsum.photos/210",
            alt: "Image 11"
        },
        {
            src: "https://picsum.photos/211",
            alt: "Image 12"
        },
        {
            src: "https://picsum.photos/212",
            alt: "Image 13"
        },
        {
            src: "https://picsum.photos/213",
            alt: "Image 14"
        },
        {
            src: "https://picsum.photos/214",
            alt: "Image 15"
        },
        {
            src: "https://picsum.photos/215",
            alt: "Image 16"
        },
        {
            src: "https://picsum.photos/216",
            alt: "Image 17"
        },
        {
            src: "https://picsum.photos/217",
            alt: "Image 18"
        },
        {
            src: "https://picsum.photos/218",
            alt: "Image 19"
        },
        {
            src: "https://picsum.photos/219",
            alt: "Image 20"
        },
        {
            src: "https://picsum.photos/220",
            alt: "Image 21"
        },
        {
            src: "https://picsum.photos/221",
            alt: "Image 22"
        },
        {
            src: "https://picsum.photos/222",
            alt: "Image 23"
        },
        {
            src: "https://picsum.photos/223",
            alt: "Image 24"
        },
        {
            src: "https://picsum.photos/224",
            alt: "Image 25"
        },
        {
            src: "https://picsum.photos/225",
            alt: "Image 26"
        },
        {
            src: "https://picsum.photos/226",
            alt: "Image 27"
        }
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
            </View>
        </View>
    );
}