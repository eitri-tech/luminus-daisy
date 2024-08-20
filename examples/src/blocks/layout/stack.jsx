import React from "react";
import {Stack, View, Text, Image, Card} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function StackBlock() {

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Stack</Text>

                <DocBlock title="3 views without stack">
                    <View className="bg-primary text-primary-content grid h-20 w-32 place-content-center rounded">1</View>
                    <View className="bg-accent text-accent-content grid h-20 w-32 place-content-center rounded">2</View>
                    <View className="bg-secondary text-secondary-content grid h-20 w-32 place-content-center rounded">3</View>
                </DocBlock>

                <DocBlock title="3 views with stack">
                    <Stack>
                        <View className="bg-primary text-primary-content grid h-20 w-32 place-content-center rounded">1</View>
                        <View className="bg-accent text-accent-content grid h-20 w-32 place-content-center rounded">2</View>
                        <View className="bg-secondary text-secondary-content grid h-20 w-32 place-content-center rounded">3</View>
                    </Stack>
                </DocBlock>

                <DocBlock title="Stacked Images">
                    <Stack>
                        <Image src="https://via.placeholder.com/150" className="rounded" alt="placeholder" />
                        <Image src="https://via.placeholder.com/150" className="rounded" alt="placeholder" />
                        <Image src="https://via.placeholder.com/150" className="rounded" alt="placeholder" />
                    </Stack>
                </DocBlock>

                <DocBlock title="Stacked cards">
                    <Stack>
                        <View className="border-base-content card bg-base-100 w-36 border text-center">
                            <View className="card-body">A</View>
                        </View>
                        <View className="border-base-content card bg-base-100 w-36 border text-center">
                            <View className="card-body">B</View>
                        </View>
                        <View className="border-base-content card bg-base-100 w-36 border text-center">
                            <View className="card-body">C</View>
                        </View>
                    </Stack>
                </DocBlock>

                <DocBlock title="Stacked cards with shadow">
                    <Stack className="shadow">
                        <View className="shadow-md border-base-content card bg-base-100 w-36 border text-center">
                            <View className="card-body">A</View>
                        </View>
                        <View className="shadow border-base-content card bg-base-100 w-36 border text-center">
                            <View className="card-body">B</View>
                        </View>
                        <View className="shadow-sm border-base-content card bg-base-100 w-36 border text-center">
                            <View className="card-body">C</View>
                        </View>
                    </Stack>
                </DocBlock>

                <DocBlock title="Stacked cards">
                    <Stack>
                        <View className="card bg-primary text-primary-content shadow-md">
                            <View className="card-body">
                                <Text render="h1" className="card-title">Notification 1</Text>
                                <Text>You have 3 unread messages. Tap here to see.</Text>
                            </View>
                        </View>
                        <View className="card bg-accent text-accent-content shadow-md">
                            <View className="card-body">
                                <Text render="h1" className="card-title">Notification 2</Text>
                                <Text>You have 3 unread messages. Tap here to see.</Text>
                            </View>
                        </View>
                        <View className="card bg-secondary text-secondary-content shadow-md">
                            <View className="card-body">
                                <Text render="h1" className="card-title">Notification 3</Text>
                                <Text>You have 3 unread messages. Tap here to see.</Text>
                            </View>
                        </View>
                    </Stack>
                </DocBlock>

            </View>
        </View>
    );
}
