import React from "react";
import {Phone, View, Text, Image} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function PhoneBlock() {


    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Phone</Text>

                <DocBlock title="iPhone mockup">
                    <Phone>
                        <Phone.Content>
                            <Text render="h1" className="text-5xl font-bold">iPhone 12</Text>
                            <Text render="p" className="py-6">
                                Hi
                            </Text>
                        </Phone.Content>
                    </Phone>
                </DocBlock>

                <DocBlock title="iPhone mockup with image">
                    <Phone>
                        <Phone.Content>
                            <Text render="h1" className="text-5xl font-bold">iPhone 12</Text>
                            <Image
                                className="rounded-lg shadow-lg"
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            />
                        </Phone.Content>
                    </Phone>
                </DocBlock>

                <DocBlock title="With color">
                    <Phone className="border-primary">
                        <Phone.Content>
                            <Text render="h1" className="text-5xl font-bold">Hi.</Text>
                        </Phone.Content>
                    </Phone>
                </DocBlock>


            </View>
        </View>
    );
}
