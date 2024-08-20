import React from 'react';
import {View, Text, Diff, Image} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function DiffBlock() {
    return (
        <View className="bg-white p-4 ">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Diff</Text>

                <DocBlock title="Diff">
                    <Diff className="aspect-[16/9]">
                        <Diff.Item1>
                            <Image
                                src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
                                alt="daisy"
                            />
                        </Diff.Item1>
                        <Diff.Item2>
                            <Image
                                src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
                                alt="daisy"
                            />
                        </Diff.Item2>
                    </Diff>
                </DocBlock>

                <DocBlock title="Diff text">
                    <Diff className="aspect-[16/9]">
                        <Diff.Item1>
                            <View className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
                                DAISY
                            </View>
                        </Diff.Item1>
                        <Diff.Item2>
                            <View className="bg-base-200 grid place-content-center text-9xl font-black">
                                DAISY
                            </View>
                        </Diff.Item2>
                    </Diff>
                </DocBlock>
            </View>
        </View>
    );
}

