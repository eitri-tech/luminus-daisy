import React from "react";
import {View, Text} from "luminus-daisy";
import reactElementToJSXString from "react-element-to-jsx-string";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function docBlock(props) {

    function getString(c){
        if(Array.isArray(c)){
            return c.map(component => (reactElementToJSXString(component))).join("\n")
        }
        return `${reactElementToJSXString(props.children)}`
    }

    return (
        <View className="flex flex-col w-full gap-4">
            <View className="w-full">
                <Text render="h3">{props.title}</Text>
                <Text render="h5">Example: {props?.subtitle}</Text>
                {props.children}
            </View>
            <View className="w-full">
                <Text render="h5">Code:</Text>
                <SyntaxHighlighter language="jsx" style={docco}>
                    {getString(props.children)}
                </SyntaxHighlighter>
            </View>
        </View>
    )
}
