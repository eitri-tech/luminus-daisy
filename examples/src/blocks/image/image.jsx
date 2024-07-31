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
        <View className="bg-white p-4 ">
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
            </View>
        </View>
    );
}