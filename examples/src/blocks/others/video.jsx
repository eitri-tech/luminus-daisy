import React from "react";
import {View, Text, Video} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function VideoBlock() {

    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Video</Text>

                <DocBlock title="Video">
                    <Video
                        source="https://www.w3schools.com/html/mov_bbb.mp4"
                        autoPlay={true}
                        className="border border-gray-200 rounded-lg"
                    />
                </DocBlock>

                <DocBlock title="Video with autoPlay">
                    <Video
                        source="https://www.w3schools.com/html/mov_bbb.mp4"
                        autoPlay={true}
                        className="border border-gray-200 rounded-lg"
                    />
                </DocBlock>

                <DocBlock title="Video with thumbnail">
                    <Video
                        source="https://www.w3schools.com/html/mov_bbb.mp4"
                        controls={true}
                        className="border border-gray-200 rounded-lg"
                        thumbnail="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    />
                </DocBlock>

                <DocBlock title="Video with loop">
                    <Video
                        source="https://www.w3schools.com/html/mov_bbb.mp4"
                        loop={true}
                        autoPlay={true}
                        className="border border-gray-200 rounded-lg"
                    />
                </DocBlock>


                <DocBlock title="YouTube Video">
                    <Video
                        className="border border-gray-200 rounded-lg"
                        youTubeId="XqZsoesa55w"
                        height="400"
                        width="100%"
                    />
                </DocBlock>

            </View>
        </View>
    );
}
