import React from 'react';
import {Skeleton, SkeletonLine, SkeletonCircle, View, Text} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function SkeletonBlock() {

    return (
        <View className=" p-4 ">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Skeleton Component</Text>

                <DocBlock title="Skeleton">
                    <Skeleton />
                </DocBlock>

                <DocBlock title="SkeletonLine">
                    <SkeletonLine />
                </DocBlock>

                <DocBlock title="SkeletonCircle">
                    <SkeletonCircle />
                </DocBlock>

                <DocBlock title="Skeleton - circle with content">
                    <div className="flex w-52 flex-col gap-4">
                        <div className="flex items-center gap-4">
                           <SkeletonCircle />
                            <div className="flex flex-col gap-4">
                                <SkeletonLine />
                                <SkeletonLine />
                            </div>
                        </div>
                        <Skeleton className="w-full" />
                    </div>
                </DocBlock>

                <DocBlock title="Skeleton - rectangle with content">
                    <div className="flex w-52 flex-col gap-4">
                        <Skeleton className="w-full" />
                        <SkeletonLine />
                        <SkeletonLine className="w-full" />
                        <SkeletonLine className="w-full" />
                    </div>
                    
                </DocBlock>

            </View>
        </View>
    );
}

