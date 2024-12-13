import React from "react";
import {View, Text, Divider} from "luminus-daisy";

export default function DividerBlock() {
    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Divider</Text>

                <Text render="p">A simple divider</Text>
                <div className="flex w-full flex-col border-opacity-50">
                    <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
                    <Divider>OR</Divider>
                    <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
                </div>

                <Text render="p">Without text</Text>
                <div className="flex w-full flex-col">
                    <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
                    <Divider></Divider>
                    <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
                </div>

                <Text render="p">With text</Text>
                <Divider>Text</Divider>

                <Text render="p">With colors</Text>
                <Divider className="divider-primary" />
                <Divider className="divider-secondary" />
                <Divider className="divider-accent" />
                <Divider className="divider-success" />
                <Divider className="divider-warning" />
                <Divider className="divider-error" />
                <Divider className="divider-info" />

                <Text render="p">With text and colors</Text>
                <Divider className="divider-primary">Primary</Divider>
                <Divider className="divider-secondary">Secondary</Divider>
                <Divider className="divider-accent">Accent</Divider>
                <Divider className="divider-success">Success</Divider>
                <Divider className="divider-warning">Warning</Divider>
                <Divider className="divider-error">Error</Divider>
                <Divider className="divider-info">Info</Divider>

                <Text render="p">responsive (lg:divider-horizontal)</Text>
                <div className="flex w-full flex-col lg:flex-row">
                    <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">content</div>
                    <Divider className="divider lg:divider-horizontal"></Divider>
                    <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">content</div>
                </div>

                
                <Text render="p">Divider in different positions</Text>
                <div className="flex w-full flex-col">
                    <Divider className="divider divider-start">Start</Divider>
                    <Divider>Default</Divider>
                    <Divider className="divider divider-end">End</Divider>
                </div>

            </View>
        </View>
    );
}
