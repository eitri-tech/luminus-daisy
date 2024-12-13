import React from 'react';
import {Radio, View, Text} from "luminus-daisy"

export default function RadioBlock() {

    const [checked, setChecked] = React.useState("");
    const handleChange = (value) => {
        setChecked(value);
    };

    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Radio</Text>

                <Text render="p">A simple radio</Text>
                <Radio />

                <Text render="p">A multiple possibiliteis</Text>
                <Radio value="option1" checked={checked === "option1"} onChange={handleChange} />
                <Radio value="option2" checked={checked === "option2"} onChange={handleChange} />

                <Text render="p">Disabled</Text>
                <Radio disabled className="border-slate-900" />
                <Radio disabled checked className="border-slate-900" />

                <Text render="p">With colors</Text>
                <Radio className="radio-primary" />
                <Radio className="radio-secondary" />
                <Radio className="radio-accent" />
                <Radio className="radio-success" />
                <Radio className="radio-warning" />
                <Radio className="radio-error" />
                <Radio className="radio-info" />

                <Text render="p">With labels</Text>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Red</span>
                        <Radio defaultChecked className="checked:bg-red-500" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Blue</span>
                        <Radio defaultChecked className="checked:bg-blue-500" />
                    </label>
                </div>


            </View>
        </View>
    );
}
