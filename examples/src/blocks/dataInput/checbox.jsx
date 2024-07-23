import React from 'react';
import {Checkbox, View, Text} from "luminus-daisy"

export default function CheckboxBlock() {

    const [checked, setChecked] = React.useState(false);

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Checkbox</Text>

                <Text render="p">A simple checkbox</Text>
                <Checkbox />

                <Text render="h2">Checkbox with onChange</Text>
                <Checkbox className="m-2" onChange={(e) => console.log(e.target.checked)} />

                <Text render="h2">Checkbox with value</Text>
                <Checkbox className="m-2" value={checked} onChange={(e) => setChecked(e.target.checked)}  />

                <Text render="h2">Checkbox with color</Text>
                <Checkbox className="m-2 checkbox-primary" defaultChecked />
                <Checkbox className="m-2 checkbox-secondary" defaultChecked />
                <Checkbox className="m-2 checkbox-accent" defaultChecked />
                <Checkbox className="m-2 checkbox-success" defaultChecked />
                <Checkbox className="m-2 checkbox-warning" defaultChecked />
                <Checkbox className="m-2 checkbox-info" defaultChecked />

                <Text render="h2">Checkbox with sizes</Text>
                <Checkbox className="m-2 checkbox-xs" defaultChecked />
                <Checkbox className="m-2 checkbox-sm" defaultChecked />
                <Checkbox className="m-2 checkbox-md" defaultChecked />
                <Checkbox className="m-2 checkbox-lg" defaultChecked />

                <Text render="h2">Checkbox disabled</Text>
                <Checkbox className="m-2" disabled />
                <Checkbox className="m-2" disabled defaultChecked />

                <Text render="h2">Checkbox indeterminate</Text>
                <Checkbox className="m-2" indeterminate />

                <Text render="h2">Checkbox with custom colors</Text>
                <Checkbox
                    defaultChecked
                    className="m-2 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
                />

            </View>
        </View>
    );
}