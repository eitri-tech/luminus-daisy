import React from 'react';
import {Image, View, Text} from "luminus-daisy"

export default function ImageBlock() {

    const imageDefault = "https://picsum.photos/id/237/536/354"

    const [image, setImage] = React.useState("https://placehold.co/600x400");

    const loadImage = () => {
        setTimeout(() => {
            setImage(imageDefault);
        }, 2000);
    };

    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Image</Text>

                <Text render="p">A simple image</Text>
                <Image
                    src={imageDefault}
                />
                <Text render="p">A image with onLoad</Text>
                <Image
                    src={image}
                    onLoad={() => loadImage()}
                    loading="lazy"
                />
                <Text render="p">A image with pinch zoom</Text>
                <Image 
                    pinchZoom
                    zoomMaxScale={10}
                    className="w-1/2"
                    src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsX29mZmljZV81Ml9pbGx1c3RyYXRpb25fc2t5bGluZV9jYXJfb25fdGhlX3JvYWRfbGFuZHNjYV9kMWYxYjAxYi04NTZiLTQzMDgtODZhOC1lZDQ1N2E2NjEzYTZfMS5qcGc.jpg" 
                />
            </View>
        </View>
    );
}
