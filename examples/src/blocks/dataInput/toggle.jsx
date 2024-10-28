import React from 'react'
import {Toggle, View, Text} from "luminus-daisy"

export default function ToggleBlock() {

    const [checked, setChecked] = React.useState(false);
    const handleChange = (value) => {
        setChecked(value);
    };

    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Toggle</Text>

                <Text render="p">A simple toggle</Text>
                <Toggle />

                <Text render="p">A onChange function</Text>
                <Text render="p" className="text-sm">Check {`${checked}`.toUpperCase()}</Text>
                <Toggle checked={checked} onChange={handleChange} />

                <Text render="p">Disabled</Text>
                <Toggle disabled className="border-slate-900" />
                <Toggle disabled checked className="border-slate-900" />

                <Text render="p">With colors</Text>
                <Toggle className="toggle-primary" />
                <Toggle className="toggle-secondary" />
                <Toggle className="toggle-accent" />
                <Toggle className="toggle-success" />
                <Toggle className="toggle-warning" />
                <Toggle className="toggle-error" />
                <Toggle className="toggle-info" />

                <Text render="h2">Checkbox indeterminate</Text>
                <Toggle className="m-2" indeterminate />

                <Text render="p">With labels</Text>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Red</span>
                        <Toggle defaultChecked className="checked:bg-red-500" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Blue</span>
                        <Toggle defaultChecked className="checked:bg-blue-500" />
                    </label>
                </div>
            </View>
        </View>
    );
}
