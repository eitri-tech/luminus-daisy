import React from 'react';
import {Range, View, Text} from "luminus-daisy"

export default function RangeBlock() {

    const [range, setRange] = React.useState(0);

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Range</Text>

                <Text render="p">A simple range</Text>
                <Range />

                <Text render="p">A range with onChange (value: {range})</Text>
                <Range value={range} onChange={e => setRange(e.target.value)} />

                <Text render="p">A range with steps and measure</Text>
                <Range step={"25"} min={0} max={100} />
                <div className="flex w-full justify-between px-2 text-xs">
                    <span>0</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                </div>

                <Text render="p">A range with min and max</Text>
                <Range min={"20"} max={"80"} />

                <Text render="p">A range with colors</Text>
                <Range className="range-primary" />
                <Range className="range-secondary" />
                <Range className="range-accent" />
                <Range className="range-success" />
                <Range className="range-warning" />
                <Range className="range-info" />
                <Range className="range-error" />
                <Range className="[--range-shdw:yellow]" />

                <Text render="p">A range with disabled</Text>
                <Range disabled />

                <Text render="p">A range with sizes</Text>
                <Range className="range-xs" />
                <Range className="range-sm" />
                <Range className="range-md" />
                <Range className="range-lg" />

            </View>
        </View>
    );
}