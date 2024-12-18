import React from "react";
import { Select, View, Text } from "luminus-daisy";
import DocBlock from "../docBlock"

export default function SelectBlock() {

    const [inputValue, setInputValue] = React.useState("Selecione um valor");

    const onChange = evt => {
        setInputValue(`Opção escolhida foi ${evt.target.value}`);
    }

    return (
        <View className="p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Select</Text>
                <Text render="p" className="mb-4">{inputValue}</Text>
                <DocBlock title="A simple select input" code="<Select />">
                    <Select
                        placeholder="Escolha uma opção"
                        onChange={onChange}
                        className="w-full"
                    >
                        <Select.Item value="1">Opção 1</Select.Item>
                        <Select.Item value="2">Opção 2</Select.Item>
                        <Select.Item value="3">Opção 3</Select.Item>
                    </Select>
                </DocBlock>
            </View>
        </View>
    );
}
