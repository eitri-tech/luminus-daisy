import React from 'react';
import {Accordion, View, Text} from "luminus-daisy"

export default function AccordionBlock() {

    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Accordion</Text>

                <Text render="p">A simple accordion</Text>
                <Accordion name="accordion-1" className="bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>

                <Accordion name="accordion-1" className="bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>

                <Accordion name="accordion-1" className="bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>

                <Text render="p">Accordion with arrow icon</Text>
                <Accordion name="accordion-2" className="collapse-arrow bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>
                <Accordion name="accordion-2" className="collapse-arrow bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>
                <Accordion name="accordion-2" className="collapse-arrow bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>

                <Text render="p">Accordion with plus/minus icon</Text>
                <Accordion name="accordion-3" className="collapse-plus bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>
                <Accordion name="accordion-3" className="collapse-plus bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>
                <Accordion name="accordion-3" className="collapse-plus bg-base-200 mt-3">
                    <Accordion.Title className="text-xl font-medium">
                        Click to open this one and close others
                    </Accordion.Title>
                    <Accordion.Content>
                        <Text render="p">Hello World!</Text>
                    </Accordion.Content>
                </Accordion>

                <Text render="p">Using Accordion and Join together</Text>
                <div className='join join-vertical w-full'>
                    <Accordion name="accordion-4" className="collapse-arrow join-item border-base-300 border">
                        <Accordion.Title className="text-xl font-medium">
                            Click to open this one and close others
                        </Accordion.Title>
                        <Accordion.Content>
                            <Text render="p">Hello World!</Text>
                        </Accordion.Content>
                    </Accordion>
                    <Accordion name="accordion-4" className="collapse-arrow join-item border-base-300 border">
                        <Accordion.Title className="text-xl font-medium">
                            Click to open this one and close others
                        </Accordion.Title>
                        <Accordion.Content>
                            <Text render="p">Hello World!</Text>
                        </Accordion.Content>
                    </Accordion>
                    <Accordion name="accordion-4" className="collapse-arrow join-item border-base-300 border">
                        <Accordion.Title className="text-xl font-medium">
                            Click to open this one and close others
                        </Accordion.Title>
                        <Accordion.Content>
                            <Text render="p">Hello World!</Text>
                        </Accordion.Content>
                    </Accordion>
                </div>

            </View>
        </View>
    );
}

