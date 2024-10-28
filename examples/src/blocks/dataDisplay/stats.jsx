import React from "react";
import {Stats, Stat, View, Text, Button} from "luminus-daisy"

export default function StatsBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md ">
            <View className="prose prose-slate">
                <Text render="h3">Stat</Text>

                <Text render="p">Display a stat</Text>
                <Stats className="shadow">
                    <Stat>
                        <Stat.Title>Total Page Views</Stat.Title>
                        <Stat.Value>89,400</Stat.Value>
                        <Stat.Desc>21% more than last month</Stat.Desc>
                    </Stat>
                </Stats>

                <Text render="p">Display a stat with icons or image</Text>
                <Stats className="shadow">
                    <Stat>
                        <Stat.Figure>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </Stat.Figure>
                        <Stat.Title>Total Likes</Stat.Title>
                        <Stat.Value className="text-primary">25.6K</Stat.Value>
                        <Stat.Desc>21% more than last month</Stat.Desc>
                    </Stat>

                    <Stat>
                        <Stat.Figure className="text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </Stat.Figure>
                        <Stat.Title>Page Views</Stat.Title>
                        <Stat.Value className="text-secondary">2.6M</Stat.Value>
                        <Stat.Desc>21% more than last month</Stat.Desc>
                    </Stat>

                    <Stat>
                        <Stat.Figure className="text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </Stat.Figure>
                        <Stat.Value>86%</Stat.Value>
                        <Stat.Title>Tasks done</Stat.Title>
                        <Stat.Desc className="text-secondary">31 tasks remaining</Stat.Desc>
                    </Stat>
                </Stats>

                <Text render="p">Display a stat</Text>
                <Stats className="shadow">
                    <Stat>
                        <Stat.Figure className="text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </Stat.Figure>
                        <Stat.Title>Downloads</Stat.Title>
                        <Stat.Value>31k</Stat.Value>
                        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
                    </Stat>
                    <Stat>
                        <Stat.Figure className="text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </Stat.Figure>
                        <Stat.Title>New Users</Stat.Title>
                        <Stat.Value>4,200</Stat.Value>
                        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
                    </Stat>
                    <Stat>
                        <Stat.Figure className="text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                            </svg>
                        </Stat.Figure>
                        <Stat.Title>New Registers</Stat.Title>
                        <Stat.Value>1,200</Stat.Value>
                        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
                    </Stat>
                </Stats>

                <Text render="p">Centered items</Text>
                <Stats className="shadow">
                    <Stat className="place-items-center">
                        <Stat.Title>Downloads</Stat.Title>
                        <Stat.Value>31k</Stat.Value>
                        <Stat.Desc>From January 1st to February 1st</Stat.Desc>
                    </Stat>
                    <Stat className="place-items-center">
                        <Stat.Title>New Users</Stat.Title>
                        <Stat.Value>4,200</Stat.Value>
                        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
                    </Stat>
                    <Stat className="place-items-center">
                        <Stat.Title>New Registers</Stat.Title>
                        <Stat.Value>1,200</Stat.Value>
                        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
                    </Stat>
                </Stats>

                <Text render="p">Vertical</Text>
                <Stats className="stats-vertical shadow">
                    <Stat>
                        <Stat.Title>Downloads</Stat.Title>
                        <Stat.Value>31k</Stat.Value>
                        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
                    </Stat>
                    <Stat>
                        <Stat.Title>New Users</Stat.Title>
                        <Stat.Value>4,200</Stat.Value>
                        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
                    </Stat>
                    <Stat>
                        <Stat.Title>New Registers</Stat.Title>
                        <Stat.Value>1,200</Stat.Value>
                        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
                    </Stat>
                </Stats>

                <Text render="p">Responsive (vertical on small screen, horizontal on large screen)</Text>
                <Stats className="stats-vertical lg:stats-horizontal shadow">
                    <Stat>
                        <Stat.Title>Downloads</Stat.Title>
                        <Stat.Value>31k</Stat.Value>
                        <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
                    </Stat>
                    <Stat>
                        <Stat.Title>New Users</Stat.Title>
                        <Stat.Value>4,200</Stat.Value>
                        <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
                    </Stat>
                    <Stat>
                        <Stat.Title>New Registers</Stat.Title>
                        <Stat.Value>1,200</Stat.Value>
                        <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
                    </Stat>
                </Stats>

                <Text render="p">With custom colors and button</Text>
                <Stats className="bg-primary text-primary-content">
                    <Stat className="bg-primary text-white">
                        <Stat.Title>Total Page Views</Stat.Title>
                        <Stat.Value>$89,400</Stat.Value>
                        <Stat.Actions>
                            <Button className="btn-sm btn-success">Add funds</Button>
                        </Stat.Actions>
                    </Stat>
                    <Stat className="bg-secondary text-white">
                        <Stat.Title>Current balance</Stat.Title>
                        <Stat.Value>$89,400</Stat.Value>
                        <Stat.Actions>
                            <Button className="btn-sm btn-primary">Withdraw</Button>
                            <Button className="btn-sm">Deposit</Button>
                        </Stat.Actions>

                    </Stat>
                </Stats>
            </View>
        </View>
    );
}
