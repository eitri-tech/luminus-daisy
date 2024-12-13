import React from 'react';
import {Avatar, AvatarGroup, View, Text} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function AvatarBlock() {

    return (
        <View className=" p-4 ">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Avatar</Text>

                <DocBlock title="Avatar">
                    <Avatar
                    >
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                    </Avatar>
                </DocBlock>

                <DocBlock title="Avatar in custom sizes">
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="w-32"
                        />
                    </Avatar>
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="w-20"
                        />
                    </Avatar>
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="w-16"
                        />
                    </Avatar>
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="w-8"
                        />
                    </Avatar>
                </DocBlock>

                <DocBlock title="Avatar rounded">
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="rounded-xl"
                        />
                    </Avatar>
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="rounded-full"
                        />
                    </Avatar>
                </DocBlock>

                <DocBlock title="Avatar with mask">

                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="mask mask-squircle"
                        />
                    </Avatar>
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="mask mask-hexagon"
                        />
                    </Avatar>
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="mask mask-triangle"
                        />
                    </Avatar>
                </DocBlock>

                <DocBlock title="Avatar Group">

                    <AvatarGroup>
                        <Avatar>
                            <Avatar.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </Avatar>
                        <Avatar>
                            <Avatar.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </Avatar>
                        <Avatar>
                            <Avatar.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </Avatar>
                        <Avatar>
                            <Avatar.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </Avatar>
                    </AvatarGroup>

                </DocBlock>

                <DocBlock title="Avatar Group with counter">
                    <AvatarGroup>
                        <Avatar>
                            <Avatar.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </Avatar>
                        <Avatar>
                            <Avatar.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </Avatar>
                        <Avatar>
                            <Avatar.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </Avatar>
                        <Avatar>
                            <Avatar.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </Avatar>
                        <Avatar className="placeholder">
                            <div className="bg-neutral text-neutral-content w-12">
                                <span>+99</span>
                            </div>
                        </Avatar>
                    </AvatarGroup>
                </DocBlock>

                <DocBlock title="Avatar with ring">
                    <Avatar>
                        <Avatar.Image
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
                        />
                    </Avatar>
                </DocBlock>

                <DocBlock title="Avatar with presence indicator">
                    <Avatar className="online">
                        <Avatar.Image
                            className="rounded-full"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                    </Avatar>
                    <Avatar className="offline">
                        <Avatar.Image
                            className="rounded-full"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                    </Avatar>
                </DocBlock>

                <DocBlock title="Avatar placeholder">
                    <Avatar className="placeholder">
                        <div className="bg-neutral text-neutral-content w-24 rounded-full">
                            <span className="text-3xl">D</span>
                        </div>
                    </Avatar>
                    <Avatar className="online placeholder">
                        <div className="bg-neutral text-neutral-content w-16 rounded-full">
                            <span className="text-xl">AI</span>
                        </div>
                    </Avatar>
                    <Avatar className="placeholder">
                        <div className="bg-neutral text-neutral-content w-12 rounded-full">
                            <span>SY</span>
                        </div>
                    </Avatar>
                    <Avatar className="placeholder">
                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                            <span className="text-xs">UI</span>
                        </div>
                    </Avatar>
                </DocBlock>
            </View>
        </View>
    );
}

