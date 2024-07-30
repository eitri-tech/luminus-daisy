import React from "react";
import {Browser, View, Text, Image} from "luminus-daisy";

export default function BrowserBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
            <View className="prose prose-slate">
                <Text render="h3">Browser</Text>

                <Text render="p">Display a basic browser</Text>
                <Browser url="https://daisyui.com">
                    <div className="border-base-300 flex justify-center border-t px-4 py-16">Hello!</div>
                </Browser>

                <Text render="p">browser mockup with background color</Text>
                <Browser url="https://daisyui.com" className="bg-base-300">
                    <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
                </Browser>

                <Text render="p">browser mockup with text and image</Text>
                <Browser url="https://daisyui.com">
                    <div className="px-4 py-4 flex-col lg:flex-row-reverse">
                        <Text render="h1" className="text-center">hello world</Text>
                        <Image src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Burger" />
                    </div>
                </Browser>

            </View>
        </View>
    );
}