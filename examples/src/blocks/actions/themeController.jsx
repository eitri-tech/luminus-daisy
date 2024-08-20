import React from "react";
import {View, Text, ThemeController, Swap} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function ThemeControllerBlock() {
    const storageKey = 'isdark';

    const [isDark, setIsDark] = React.useState(
        JSON.parse(localStorage.getItem(storageKey))
    );

    React.useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(isDark));
    }, [isDark]);

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Theme Controller</Text>
                <Text render="p" className="text-warning">
                    Theme Controller changes the theme using CSS only. You can then use JS to save the input state in the server or localStorage if you want it to persist on page refresh.
                </Text>

                <DocBlock title="Theme Controller using a toggle">
                    <ThemeController
                        className="toggle"
                        onChange={() => setIsDark(!isDark)}
                        checked={isDark}
                    />
                </DocBlock>

                <DocBlock title="Theme Controller using a checkbox">
                    <ThemeController
                        className="checkbox"
                        onChange={() => setIsDark(!isDark)}
                        checked={isDark}
                    />
                </DocBlock>

                <DocBlock title="Theme Controller using a swap">
                    <Swap className="swap-rotate">
                        <ThemeController
                            type="checkbox"
                            className="theme-controller"
                            value="synthwave"
                            checked={isDark}
                            onChange={() => setIsDark(!isDark)}
                        />
                        <Swap.On>
                            <svg
                                className="swap-on h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </Swap.On>
                        <Swap.Off>
                            <svg
                                className="swap-off h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                        </Swap.Off>
                    </Swap>
                </DocBlock>

                <DocBlock title="Theme Controller using a toggle with text">
                    <View className="flex cursor-pointer gap-2">
                        <Text className="label-text">Current</Text>
                        <ThemeController
                            className="toggle"
                            onChange={() => setIsDark(!isDark)}
                            checked={isDark}
                        />
                        <Text className="label-text">Synthwave</Text>
                    </View>
                </DocBlock>

                <DocBlock title="Theme Controller using a toggle with icons">
                    <View className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <ThemeController
                            className="toggle"
                            onChange={() => setIsDark(!isDark)}
                            checked={isDark}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </View>
                </DocBlock>

                <DocBlock title="Theme Controller using a toggle with icons inside">
                    <View className="grid cursor-pointer place-items-center">
                        <ThemeController
                            className="toggle bg-base-content col-span-2 col-start-1 row-start-1"
                            onChange={() => setIsDark(!isDark)}
                            checked={isDark}
                        />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </View>
                </DocBlock>

                <DocBlock title="Theme Controller using a toggle with custom colors">
                    <View className="flex cursor-pointer gap-2">
                        <ThemeController
                            className="toggle col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
                            onChange={() => setIsDark(!isDark)}
                            checked={isDark}
                        />
                    </View>
                </DocBlock>

                <DocBlock title="Theme Controller using a radio input">
                    <View className="preview border-base-300 bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
                        <View className="flex flex-col">
                            <View className="form-control">
                                <View className="label cursor-pointer gap-4">
                                    <span className="label-text">Default</span>
                                    <ThemeController
                                        className="radio"
                                        name="theme-radios"
                                        value="default"
                                    />
                                </View>
                            </View>
                            <View className="form-control">
                                <View className="label cursor-pointer gap-4">
                                    <span className="label-text">Retro</span>
                                    <ThemeController
                                        className="radio"
                                        name="theme-radios"
                                        value="retro"
                                    />
                                </View>
                            </View>
                            <View className="form-control">
                                <View className="label cursor-pointer gap-4">
                                    <span className="label-text">Cyberpunk</span>
                                    <ThemeController
                                        className="radio"
                                        name="theme-radios"
                                        value="cyberpunk"
                                    />
                                </View>
                            </View>
                            <View className="form-control">
                                <View className="label cursor-pointer gap-4">
                                    <span className="label-text">Valentine</span>
                                    <ThemeController
                                        className="radio"
                                        name="theme-radios"
                                        value="valentine"
                                    />
                                </View>
                            </View>
                            <View className="form-control">
                                <View className="label cursor-pointer gap-4">
                                    <span className="label-text">Aqua</span>
                                    <ThemeController
                                        className="radio"
                                        name="theme-radios"
                                        value="aqua"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="Theme Controller using a radio button">
                    <View className="join join-vertical">
                        <ThemeController
                            type="radio"
                            name="theme-buttons"
                            className="btn join-item"
                            label="Default"
                            value="default"
                        />
                        <ThemeController
                            type="radio"
                            name="theme-buttons"
                            className="btn join-item"
                            label="Retro"
                            value="retro"
                        />
                        <ThemeController
                            type="radio"
                            name="theme-buttons"
                            className="btn join-item"
                            label="Cyberpunk"
                            value="cyberpunk"
                        />
                        <ThemeController
                            type="radio"
                            name="theme-buttons"
                            className="btn join-item"
                            label="Valentine"
                            value="valentine"
                        />
                        <ThemeController
                            type="radio"
                            name="theme-buttons"
                            className="btn join-item"
                            label="Aqua"
                            value="aqua"
                        />
                    </View>
                </DocBlock>

            </View>
        </View>
    );
}
