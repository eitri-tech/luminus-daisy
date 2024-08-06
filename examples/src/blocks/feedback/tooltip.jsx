import React from "react";

import {Tooltip, View, Text} from "luminus-daisy";

export default function TooltipBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
            <View className="prose prose-slate">
                <Text render="h3">Tooltip</Text>

                <Text render="p">Display a basic tooltip</Text>
                <Tooltip tip="foo:bar">
                    <button className="btn">Hover me</button>
                </Tooltip>

                <Text render="p">Display a empty</Text>
                <Tooltip>
                    <button className="btn">Empty</button>
                </Tooltip>


                <Text render="p">Display a forced open</Text>
                <Tooltip
                    tip="foo:bar"
                    content=""
                    className="tooltip-open tooltip-right"
                >
                    <button className="btn">Force open</button>
                </Tooltip>

                <Text render="p">Display a top</Text>
                <Tooltip
                    tip="foo:bar"
                    className="tooltip-top"
                >
                    <button className="btn">Top</button>
                </Tooltip>

                <Text render="p">Display a right</Text>
                <Tooltip
                    tip="foo:bar"
                    className="tooltip-right"
                >
                    <button className="btn">Right</button>
                </Tooltip>

                <Text render="p">Display a bottom</Text>
                <Tooltip
                    tip="foo:bar"
                    className="tooltip-bottom"
                >
                    <button className="btn">Bottom</button>
                </Tooltip>

                <Text render="p">Display a left</Text>
                <Tooltip
                    tip="foo:bar"
                    className="tooltip-left"
                >
                    <button className="btn">Left</button>
                </Tooltip>


                <Text render="p">Display a colors</Text>
                <div className="mt-5">
                    <Tooltip
                        tip="foo:bar"
                        className="tooltip-primary"
                    >
                        <Text className="text-primary">primary</Text>
                    </Tooltip>
                </div>

                <div className="mt-5">
                    <Tooltip
                        tip="foo:bar"
                        className="tooltip-secondary"
                    >
                        <Text className="text-secondary">secondary</Text>
                    </Tooltip>
                </div>



                <div className="mt-5">
                    <Tooltip
                        tip="foo:bar"
                        className="tooltip-success"
                    >
                        <Text className="text-success">success</Text>
                    </Tooltip>
                </div>

                <div className="mt-5">
                    <Tooltip
                        tip="foo:bar"
                        className="tooltip-accent"
                    >
                        <Text className="text-accent">accent</Text>
                    </Tooltip>
                </div>

                <div className="mt-5">
                    <Tooltip
                        tip="foo:bar"
                        className="tooltip-info"
                    >
                        <Text className="text-info">info</Text>
                    </Tooltip>
                </div>

                <div className="mt-5">
                    <Tooltip
                        tip="foo:bar"
                        className="tooltip-warning"
                    >
                        <Text className="text-warning">warning</Text>
                    </Tooltip>
                </div>

                <div className="mt-5">
                    <Tooltip
                        tip="foo:bar"
                        className="tooltip-error"
                    >
                        <Text className="text-error">error</Text>
                    </Tooltip>
                </div>

                <Text render="p">Responsive tooltip. only show for large screen</Text>
                <div className="mt-5">
                    <Tooltip
                        tip="foo:bar"
                        className="lg:tooltip"
                    >
                        <button className="btn">Hover me</button>
                    </Tooltip>
                </div>


            </View>
        </View>
    );
}