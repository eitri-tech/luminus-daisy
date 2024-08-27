import React from 'react';
import {Animator, View, Text} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function AnimatorBlock() {

    return (
        <View className="bg-white p-4 ">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Animator (Lottie File)</Text>

                <DocBlock title="Animator">
                    <Animator
                        src={"https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"}
                    />
                </DocBlock>

                <DocBlock title="With custom size">
                    <Animator
                        src={"https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"}
                        width={120}
                        height={120}
                    />
                </DocBlock>

                <DocBlock title="With false autoPlay (default: true)">
                    <Animator
                        src={"https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"}
                        autoPlay={false}
                    />
                </DocBlock>

                <DocBlock title="With false loop (default: true)">
                    <Animator
                        src={"https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"}
                        loop={false}
                    />
                </DocBlock>

                <DocBlock title="With speed (default: 1)">
                    <Animator
                        src={"https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"}
                        speed={10}
                    />
                </DocBlock>

            </View>
        </View>
    );
}

