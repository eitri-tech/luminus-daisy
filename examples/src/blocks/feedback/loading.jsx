import React from 'react';
import {Loading, View, Text} from "luminus-daisy"
import DocBlock from "../docBlock"

export default function LoadingBlock() {
    return (
        <View className=" p-4">
            <View className="prose prose-slate">
                <Text render="h3">Loading</Text>

                <DocBlock title="Loading spinner">
                    <Loading className="loading-spinner loading-xs" />
                    <Loading className="loading-spinner loading-sm" />
                    <Loading className="loading-spinner loading-md" />
                    <Loading className="loading-spinner loading-lg" />
                </DocBlock>

                <DocBlock title="Loading dots">
                    <Loading className="loading-dots loading-xs" />
                    <Loading className="loading-dots loading-sm" />
                    <Loading className="loading-dots loading-md" />
                    <Loading className="loading-dots loading-lg" />
                </DocBlock>

                <DocBlock title="Loading ring">
                    <Loading className="loading-ring loading-xs" />
                    <Loading className="loading-ring loading-sm" />
                    <Loading className="loading-ring loading-md" />
                    <Loading className="loading-ring loading-lg" />
                </DocBlock>

                <DocBlock title="Loading ball">
                    <Loading className="loading-ball loading-xs" />
                    <Loading className="loading-ball loading-sm" />
                    <Loading className="loading-ball loading-md" />
                    <Loading className="loading-ball loading-lg" />
                </DocBlock>

                <DocBlock title="Loading bars">
                    <Loading className="loading-bars loading-xs" />
                    <Loading className="loading-bars loading-sm" />
                    <Loading className="loading-bars loading-md" />
                    <Loading className="loading-bars loading-lg" />
                </DocBlock>

                <DocBlock title="Loading infinity">
                    <Loading className="loading-infinity loading-xs" />
                    <Loading className="loading-infinity loading-sm" />
                    <Loading className="loading-infinity loading-md" />
                    <Loading className="loading-infinity loading-lg" />
                </DocBlock>


                <DocBlock title="Loading with colors">
                    <Loading className="loading-spinner text-primary" />
                    <Loading className="loading-spinner text-secondary" />
                    <Loading className="loading-spinner text-accent" />
                    <Loading className="loading-spinner text-neutral" />
                    <Loading className="loading-spinner text-info" />
                    <Loading className="loading-spinner text-success" />
                    <Loading className="loading-spinner text-warning" />
                    <Loading className="loading-spinner text-error" />
                </DocBlock>

            </View>
        </View>
    );
}
