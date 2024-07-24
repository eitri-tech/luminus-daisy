import React from 'react'
import {Select, View, Text} from "luminus-daisy"

export default function SelectBlock() {

    const [selected, setSelected] = React.useState("-");
    const handleChange = (value) => {
        setSelected(value);
    };

    const commonOptions = [
        {value: '-', label: 'Pick your favorite', disabled: true},
        {value: 'sedan', label: 'Sedan'},
        {value: 'hatchback', label: 'Hatchback'},
        {value: 'suv', label: 'SUV'}
    ]

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Select</Text>

                <Text render="p">A simple select</Text>
                <Select
                    value={selected}
                    options={commonOptions}
                />

                <Text render="p">A onChange function</Text>
                <Text render="p" className="text-sm">Check {`${selected}`.toUpperCase()}</Text>
                <Select
                    value={selected}
                    onChange={handleChange}
                    options={commonOptions}
                />

                <Text render="p">Disabled</Text>
                <Select
                    disabled
                    options={commonOptions}
                />

                <Text render="p">With colors</Text>
                <Select
                    className="select-primary"
                    options={commonOptions}
                />
                <Select
                    className="select-secondary"
                    options={commonOptions}
                />
                <Select
                    className="select-accent"
                    options={commonOptions}
                />
                <Select
                    className="select-success"
                    options={commonOptions}
                />
                <Select
                    className="select-warning"
                    options={commonOptions}
                />
                <Select
                    className="select-error"
                    options={commonOptions}
                />
                <Select
                    className="select-info"
                    options={commonOptions}
                />

                <Text render="p">With labels</Text>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Red</span>
                        <Select
                            className="select-error"
                            options={commonOptions}

                        />
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Blue</span>
                        <Select
                            className="select-info"
                            options={commonOptions}
                        />
                    </label>
                </div>

            </View>
        </View>
    );
}