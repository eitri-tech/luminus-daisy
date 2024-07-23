import React from "react";
import {TextInput, View, Text} from "luminus-daisy";

export default function TextInputBlock() {

    const [inputValue, setInputValue] = React.useState("");

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Text Input</Text>
                <Text render="p">A simple text input</Text>
                <TextInput />

                <Text render="p">Text input with placeholder</Text>
                <TextInput className="input-bordered" placeholder="Enter your name" />

                <Text render="p">Text input with onChange</Text>
                <Text render="p" className="text-sm m-0 p-0">Value: {inputValue}</Text>
                <TextInput className="input-bordered" onChange={(value) => setInputValue(value)} />

                <Text render="p">Text input with disabled</Text>
                <TextInput disabled className="input-bordered" placeholder="You can't touch this" />

                <Text render="p">Text input with readonly</Text>
                <TextInput readOnly className="input-bordered" value={"ReadOnly Value"} />

                <Text render="p">Text input with full width</Text>
                <TextInput className="input-bordered w-full" />

                <Text render="p">Text input with border</Text>
                <TextInput className="input-bordered" />

                <Text render="p">Text input no background (ghost)</Text>
                <TextInput className="input-ghost" />

                <Text render="p">Text input with form-control and labels</Text>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                        <span className="label-text-alt">Top Right label</span>
                    </div>
                    <TextInput className="input-bordered" placeholder="Type here" />
                    <div className="label">
                        <span className="label-text-alt">Bottom Left label</span>
                        <span className="label-text-alt">Bottom Right label</span>
                    </div>
                </label>

                <Text render="p">Text input with colors</Text>
                <TextInput className="input-primary input-bordered" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-secondary input-bordered" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-accent input-bordered" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-info input-bordered" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-success input-bordered" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-warning input-bordered" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-error input-bordered" />

                <Text render="p">Text input with sizes</Text>
                <TextInput className="input-bordered input-xs" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered input-sm" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered input-md" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered input-lg" />

                <Text render="p">With input types</Text>
                <TextInput className="input-bordered" type="text" placeholder="Text" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="email" placeholder="Email" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="password" placeholder="Password" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="number" placeholder="Number" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="date" placeholder="Date" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="time" placeholder="Time" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="tel" placeholder="Phone" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="url" placeholder="URL" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="search" placeholder="Search" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="color" placeholder="Color" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="month" placeholder="Month" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="week" placeholder="Week" />
                <div className="mt-2 mb-2"></div>
                <TextInput className="input-bordered" type="datetime-local" placeholder="Datetime-local" />

                <Text render="p">With icons</Text>
                <TextInput
                    className="input-bordered"
                    type="search"
                    placeholder="Search"
                    iconInsideRight={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    }
                />
                <div className="mt-2 mb-2"></div>
                <TextInput
                    type="email"
                    placeholder="Email"
                    iconInsideLeft={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                    }
                />
                <div className="mt-2 mb-2"></div>
                <TextInput
                    type="text"
                    placeholder="Username"
                    iconInsideLeft={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                    }
                />
                <div className="mt-2 mb-2"></div>
                <TextInput
                    type="password"
                    placeholder="Password"
                    iconInsideLeft={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                    }
                />
                <div className="mt-2 mb-2"></div>

                <Text render="p">With label inside</Text>
                <TextInput
                    className="input-bordered"
                    type="search"
                    placeholder="Daisy"
                    labelInsideLeft="Name"
                />
                <div className="mt-2 mb-2"></div>
                <TextInput
                    type="email"
                    placeholder="daisy@site.com"
                    labelInsideLeft="Email"
                />
                <div className="mt-2 mb-2"></div>
                <TextInput
                    placeholder="Search"
                    iconInsideRight={
                        <span>
                            <kbd className="kbd kbd-sm">⌘</kbd>
                            <kbd className="kbd kbd-sm">K</kbd>
                        </span>
                    }
                />
                <div className="mt-2 mb-2"></div>
                <TextInput
                    placeholder="Search"
                    iconInsideRight={
                        <span className="badge badge-info">Optional</span>
                    }
                />
            </View>
        </View>
    );
}