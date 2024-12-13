import React from 'react';
import {Collapse, View, Text} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function CollapseBlock() {

    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Collapse</Text>

                <DocBlock title="With focus">
                    <Collapse className="bg-base-200" focus>
                        <Collapse.Title className="text-xl font-medium">
                            <Text render="p">Focus me to see content</Text>
                        </Collapse.Title>
                        <Collapse.Content>
                            <Text render="p">focus attribute is necessary to make the div focusable</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

                <DocBlock title="With checkbox">
                    <Collapse className="bg-base-200" checkbox>
                        <Collapse.Title className="text-xl font-medium">
                            <Text render="p">Click me to show/hide content</Text>
                        </Collapse.Title>
                        <Collapse.Content>
                            <Text render="p">hello</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

                <DocBlock title="With border and background color">
                    <Collapse className="border-base-300 bg-base-200 border" focus>
                        <Collapse.Title>
                            <Text render="p">Focus me to see content</Text>
                        </Collapse.Title>
                        <Collapse.Content>
                            <Text render="p">focus attribute is necessary to make the div focusable</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

                <DocBlock title="With arrow icon">
                    <Collapse className="collapse-arrow border-base-300 bg-base-200 border" focus>
                        <Collapse.Title>
                            <Text render="p">Focus me to see content</Text>
                        </Collapse.Title>
                        <Collapse.Content>
                            <Text render="p">focus attribute is necessary to make the div focusable</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

                <DocBlock title="With arrow plus/minus icon">
                    <Collapse className="collapse-plus border-base-300 bg-base-200 border" focus>
                        <Collapse.Title>
                            <Text render="p">Focus me to see content</Text>
                        </Collapse.Title>
                        <Collapse.Content>
                            <Text render="p">focus attribute is necessary to make the div focusable</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

                <DocBlock title="Force open">
                    <Collapse className="collapse-open border-base-300 bg-base-200 border" focus>
                        <Collapse.Title>
                            <Text render="p">Focus me to see content</Text>
                        </Collapse.Title>
                        <Collapse.Content>
                            <Text render="p">focus attribute is necessary to make the div focusable</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

                <DocBlock title="Force close">
                    <Collapse className="collapse-close border-base-300 bg-base-200 border" focus>
                        <Collapse.Title>
                            <Text render="p">Focus me to see content</Text>
                        </Collapse.Title>
                        <Collapse.Content>
                            <Text render="p">focus attribute is necessary to make the div focusable</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

                <DocBlock title="Custom colors for collapse that works with focus">
                    <Collapse className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse" focus>
                        <Collapse.Title>
                            <Text render="p">Focus me to see content</Text>
                        </Collapse.Title>
                        <Collapse.Content>
                            <Text render="p">focus attribute is necessary to make the div focusable</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

                <DocBlock title="Custom colors for collapse that works with checkbox">
                    <Collapse className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <Collapse.Title>
                            <Text render="p">Click me to show/hide content</Text>
                        </Collapse.Title>
                        <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <Text render="p">hello</Text>
                        </Collapse.Content>
                    </Collapse>
                </DocBlock>

            </View>
        </View>
    );
}

