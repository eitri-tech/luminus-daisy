import React from "react";
import {Image, View, Text, Button, Hero, TextInput} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function HeroBlock() {

    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Hero</Text>

                <DocBlock title="Centered hero">
                    <Hero className="bg-base-200 min-h-screen">
                        <Hero.Content className="text-center">
                            <View className="max-w-md">
                                <Text render="h1" className="text-5xl font-bold">Hello there</Text>
                                <Text render="p" className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </Text>
                                <Button className="btn-primary">Get Started</Button>
                            </View>
                        </Hero.Content>
                    </Hero>
                </DocBlock>

                <DocBlock title="Hero with figure">
                    <Hero className="min-h-[30rem] rounded bg-base-200">
                        <Hero.Content className="flex-col lg:flex-row">
                            <Image
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl"
                            />
                            <View>
                                <Text render="h1" className="text-5xl font-bold">Box Office News!</Text>
                                <Text render="p" className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </Text>
                                <Button className="btn-primary">Get Started</Button>
                            </View>
                        </Hero.Content>
                    </Hero>
                </DocBlock>

                <DocBlock title="Hero with figure but reverse order">
                    <Hero className="min-h-[30rem] rounded bg-base-200">
                        <Hero.Content className="flex-col lg:flex-row-reverse">
                            <Image
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl"
                            />
                            <View>
                                <Text render="h1" className="text-5xl font-bold">Box Office News!</Text>
                                <Text render="p" className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </Text>
                                <Button className="btn-primary">Get Started</Button>
                            </View>
                        </Hero.Content>
                    </Hero>
                </DocBlock>

                <DocBlock title="Hero with form">
                    <Hero className="min-h-screen min-h-[30rem] rounded bg-base-200">
                        <Hero.Content className="flex-col lg:flex-col-reverse">
                            <View className="text-center lg:text-left">
                                <Text render="h1" className="text-5xl font-bold">Login now!</Text>
                                <Text render="p" className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </Text>
                            </View>
                            <View className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <View className="card-body">
                                    <View className="form-control">
                                        <Text className="label-text">
                                            Email
                                        </Text>
                                        <TextInput
                                            className="input input-bordered"
                                            placeholder="Email"
                                        />
                                    </View>
                                    <View className="form-control">
                                        <Text className="label-text">
                                            Password
                                        </Text>
                                        <TextInput
                                            className="input input-bordered"
                                            placeholder="Password"
                                        />
                                        <Text className="label">
                                            <Text className="label-text-alt link link-hover">
                                                Forgot password?
                                            </Text>
                                        </Text>
                                    </View>
                                    <View className="form-control mt-6">
                                        <Button className="btn-primary">Login</Button>
                                    </View>
                                </View>

                            </View>

                        </Hero.Content>
                    </Hero>
                </DocBlock>

                <DocBlock title="Hero with overlay image">
                    <Hero
                        className="min-h-screen"
                        overlaySrc="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
                    >
                        <Hero.Content className="text-neutral-content text-center">
                            <View className="max-w-md">
                                <Text render="h1" className="text-5xl font-bold">Hello there</Text>
                                <Text render="p" className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </Text>
                                <Button className="btn-primary">Get Started</Button>
                            </View>
                        </Hero.Content>
                    </Hero>
                </DocBlock>

            </View>
        </View>
    );
}
