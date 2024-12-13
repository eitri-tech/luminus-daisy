import React from "react";
import {View, Text, Toast} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function ToastBlock() {


    return (
        <View className=" p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Toast</Text>
                <Text render="p" className="text-warning">
                    Absolute positioning is used here solely for better visualization of the example.
                </Text>

                <DocBlock title="toast with alert inside">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New message arrived.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-top toast-start">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-top toast-start absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-top toast-center">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-top toast-center absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-top toast-end">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-top toast-end absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-start toast-middle">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-start toast-middle absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-center toast-middle">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-center toast-middle absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-end toast-middle">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-end toast-middle absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-start toast-bottom (default)">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-start absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-center toast-bottom (default)">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-center toast-bottom absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="toast-end (default) toast-bottom (default)">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="w-full h-64 relative">
                            <Toast className="toast-end absolute">
                                <Toast.Alert className="alert-info">
                                    <Text>New mail arrived.</Text>
                                </Toast.Alert>
                                <Toast.Alert className="alert-success">
                                    <Text>Message sent successfully.</Text>
                                </Toast.Alert>
                            </Toast>
                        </View>
                    </View>
                </DocBlock>

            </View>
        </View>
    );
}
