import React from "react";
import {Text, View, Textarea} from "luminus-daisy";

export default function TextareaBlock() {
    const [value, setValue] = React.useState("");

    return (
        <View className="bg-white p-4">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Textarea</Text>

                <Text render="p">A simple textarea</Text>
                <Textarea />

                <Text render="p">A simple textarea with onChange and value: {value}</Text>
                <Textarea className="textarea-bordered" onChange={value => setValue(value)} value={value} />

                <Text render="p">With placeholder</Text>
                <Textarea className="textarea-bordered" placeholder="Type here" />

                <Text render="p">With value</Text>
                <Textarea className="textarea-bordered" value="This is a value" />

                <Text render="p">Disabled</Text>
                <Textarea className="textarea-bordered" disabled />

                <Text render="p">With colors</Text>
                <Textarea name="text-area-1" className="textarea-primary" />
                <Textarea name="text-area-2" className="textarea-secondary" />
                <Textarea name="text-area-3" className="textarea-accent" />
                <Textarea name="text-area-4" className="textarea-success" />
                <Textarea name="text-area-5" className="textarea-warning" />
                <Textarea name="text-area-6" className="textarea-error" />
                <Textarea name="text-area-7" className="textarea-info" />

                <Text render="p">With label</Text>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Label</span>
                        <Textarea className="textarea-primary" />
                    </label>
                </div>
            </View>
        </View>
    );
}