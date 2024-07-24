import React from "react";

import {Tooltip, View, Text} from "luminus-daisy";

export default function TooltipBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
            <View className="prose prose-slate">
                <Text render="h3">Tooltip</Text>

                <Text render="p">Display a basic tooltip</Text>
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    onClick={() => console.log("clicked")}
                />

                <Text render="p">Display a forced open</Text>
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-open tooltip-right"
                />

                <Text render="p">Display a top</Text>
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-top"
                />

                <Text render="p">Display a right</Text>
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-right"
                />

                <Text render="p">Display a bottom</Text>
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-bottom"
                />

                <Text render="p">Display a left</Text>
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-left"
                />


                <Text render="p">Display a disabled</Text>
                <Tooltip
                    disabled
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-disabled"
                />

                <Text render="p">Display a colors</Text>
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-primary"
                />
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-secondary"
                />
                <Tooltip

                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-success"
                />
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-accent"
                />
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-info"
                />
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-warning"
                />
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="tooltip-error"
                />

                <Text render="p">Responsive tooltip. only show for large screen</Text>
                <Tooltip
                    dataTip="foo:bar"
                    content="This is a tooltip"
                    className="lg:tooltip"
                />


            </View>
        </View>
    );
}