import React from "react";
import {TextInput, View, Text} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function TextInputBlock() {

    const [inputValue, setInputValue] = React.useState("");

    return (
        <View className="p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Text Input</Text>
                <TextInput />
                
                <DocBlock title="A simple text input" code="<TextInput />">
                    <TextInput />
                </DocBlock>

                <DocBlock title="Text input with placeholder">
                    <TextInput className="input-bordered" placeholder="Enter your name" />
                </DocBlock>

                <DocBlock title="Text input with onChange">
                    <Text render="p" className="text-sm m-0 p-0">Value: {inputValue}</Text>
                    <TextInput className="input-bordered" onChange={(value) => setInputValue(value)} />
                </DocBlock>

                <DocBlock title="Text input with disabled">
                    <TextInput disabled className="input-bordered" placeholder="You can't touch this" />
                </DocBlock>

                <DocBlock title="Text input with readonly">
                    <TextInput readOnly className="input-bordered" value={"ReadOnly Value"} />
                </DocBlock>

                <DocBlock title="Text input with full width">
                    <TextInput className="input-bordered w-full" />
                </DocBlock>

                <DocBlock title="Text input with border">
                    <TextInput className="input-bordered" />
                </DocBlock>

                <DocBlock title="Text input no background (ghost)">
                    <TextInput className="input-ghost" />
                </DocBlock>

                <DocBlock title="Text input with form-control and labels">
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
                </DocBlock>

                <DocBlock title="Text input with colors">
                    <TextInput className="input-primary input-bordered mb-4" />
                    <TextInput className="input-secondary input-bordered mb-4" />
                    <TextInput className="input-accent input-bordered mb-4" />
                    <TextInput className="input-info input-bordered mb-4" />
                    <TextInput className="input-success input-bordered mb-4" />
                    <TextInput className="input-warning input-bordered mb-4" />
                    <TextInput className="input-error input-bordered mb-4" />
                </DocBlock>

                <DocBlock title="Text input with sizes">
                    <TextInput className="input-bordered input-xs mb-4" />
                    <TextInput className="input-bordered input-sm mb-4" />
                    <TextInput className="input-bordered input-md mb-4" />
                    <TextInput className="input-bordered input-lg mb-4" />
                </DocBlock>

                <DocBlock title="With input types">
                    <TextInput className="input-bordered mb-4" type="text" placeholder="Text" />
                    <TextInput className="input-bordered mb-4" type="email" placeholder="Email" />
                    <TextInput className="input-bordered mb-4" type="password" placeholder="Password" />
                    <TextInput className="input-bordered mb-4" type="number" placeholder="Number" />
                    <TextInput className="input-bordered mb-4" type="tel" mask="(99) 99999-9999" />
                    {/* <TextInput className="input-bordered mb-4" type="date" placeholder="Date" /> */}
                    {/* <TextInput className="input-bordered mb-4" type="time" placeholder="Time" /> */}
                    {/* <TextInput className="input-bordered mb-4" type="tel" placeholder="Phone" /> */}
                    {/* <TextInput className="input-bordered mb-4" type="url" placeholder="URL" /> */}
                    {/* <TextInput className="input-bordered mb-4" type="search" placeholder="Search" /> */}
                    {/* <TextInput className="input-bordered mb-4" type="color" placeholder="Color" /> */}
                    {/* <TextInput className="input-bordered mb-4" type="month" placeholder="Month" /> */}
                    {/* <TextInput className="input-bordered mb-4" type="week" placeholder="Week" /> */}
                    {/* <TextInput className="input-bordered mb-4" type="datetime-local" placeholder="Datetime-local" /> */}
                </DocBlock>

                <DocBlock title="With input variants" subtitle="Mask">
                    <TextInput className="input-bordered mb-4" variant="mask" type="tel" mask="(99) 99999-9999" />
                    <TextInput className="input-bordered mb-4" variant="mask" mask="999.999.999-99" />
                </DocBlock>

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
                

                <Text render="p">With label inside</Text>
                <TextInput
                    className="input-bordered"
                    type="search"
                    placeholder="Daisy"
                    labelInsideLeft="Name"
                />
                
                <TextInput
                    type="email"
                    placeholder="daisy@site.com"
                    labelInsideLeft="Email"
                />
                
                <TextInput
                    placeholder="Search"
                    iconInsideRight={
                        <span>
                            <kbd className="kbd kbd-sm">⌘</kbd>
                            <kbd className="kbd kbd-sm">K</kbd>
                        </span>
                    }
                />
                
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
