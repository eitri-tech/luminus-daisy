import React from "react";
import {View, Text, HTMLRender} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function HTMLRenderBlock() {

    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">HTMLRender</Text>

                <DocBlock title="Basic HTML Render">
                    <HTMLRender
                        html="<h1>Hello World</h1>"
                    />
                </DocBlock>

                <DocBlock title="HTML Render with CSS">
                    <HTMLRender
                        html="<h1 style='color: red'>Hello World</h1>"
                    />
                </DocBlock>

                <DocBlock title="HTML iframe Render (Not Allowed)" subtitle="Don't display">
                    <HTMLRender
                        html="<iframe src='https://eitri.tech/'></iframe>"
                    />
                </DocBlock>

                <DocBlock title="HTML Render iframe (allowUnsafeIframe = true)">
                    <HTMLRender
                        className="w-full h-full"
                        allowUnsafeIframe={true}
                        html="<iframe width={400} height={766} src='https://eitri.tech/'></iframe>"
                    />
                </DocBlock>


            </View>
        </View>
    );
}
