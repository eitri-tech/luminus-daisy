import React from 'react';
import {View, Text, Kbd} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function KbdBlock() {
    return (
        <View className="bg-white p-4 ">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Kbd</Text>

                <DocBlock title="Kbd">
                    <Kbd>A</Kbd>
                </DocBlock>

                <DocBlock title="Kbd sizes">
                    <Kbd size="lg">Shift</Kbd>
                    <Kbd size="md">Shift</Kbd>
                    <Kbd size="sm">Shift</Kbd>
                    <Kbd size="xs">Shift</Kbd>
                </DocBlock>

                <DocBlock title="Kbd in text">
                    <Text>Press <Kbd>F</Kbd> to pay respects</Text>
                </DocBlock>

                <DocBlock title="Kbd combination">
                    <Text><Kbd>Ctrl</Kbd> + <Kbd>shit</Kbd> + <Kbd>del</Kbd></Text>
                </DocBlock>

                <DocBlock title="Function Keys">
                    <Kbd>⌘</Kbd>
                    <Kbd>⌥</Kbd>
                    <Kbd>⇧</Kbd>
                    <Kbd>⌃</Kbd>
                </DocBlock>

                <DocBlock title="A full keyboard">
                    <View className="my-1 flex w-full justify-center gap-1">
                        <Kbd>q</Kbd>
                        <Kbd>w</Kbd>
                        <Kbd>e</Kbd>
                        <Kbd>r</Kbd>
                        <Kbd>t</Kbd>
                        <Kbd>y</Kbd>
                        <Kbd>u</Kbd>
                        <Kbd>i</Kbd>
                        <Kbd>o</Kbd>
                        <Kbd>p</Kbd>
                    </View>
                    <View className="my-1 flex w-full justify-center gap-1">
                        <Kbd>a</Kbd>
                        <Kbd>s</Kbd>
                        <Kbd>d</Kbd>
                        <Kbd>f</Kbd>
                        <Kbd>g</Kbd>
                        <Kbd>h</Kbd>
                        <Kbd>j</Kbd>
                        <Kbd>k</Kbd>
                        <Kbd>l</Kbd>
                    </View>
                    <View className="my-1 flex w-full justify-center gap-1">
                        <Kbd>z</Kbd>
                        <Kbd>x</Kbd>
                        <Kbd>c</Kbd>
                        <Kbd>v</Kbd>
                        <Kbd>b</Kbd>
                        <Kbd>n</Kbd>
                        <Kbd>m</Kbd>
                        <Kbd>/</Kbd>
                    </View>
                </DocBlock>

                <DocBlock title="Arrow Keys">
                    <View className="flex w-full justify-center">
                        <Kbd>▲</Kbd>
                    </View>
                    <View className="flex w-full justify-center gap-12">
                        <Kbd>◀︎</Kbd>
                        <Kbd>▶︎</Kbd>
                    </View>
                    <View className="flex w-full justify-center">
                        <Kbd>▼</Kbd>
                    </View>
                </DocBlock>
            </View>
        </View>
    );
}

