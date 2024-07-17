import React from 'react';
import {Progress, View, Text, ProgressRadial} from "luminus-daisy"

export default function ProgressBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
            <View className="prose prose-slate">
                <Text render="h3">Progress</Text>

                <Text render="p">Display a simple progress bar</Text>
                <Progress className="progress" />

                <Text render="p">Progress bar can display a value</Text>
                <Progress className="progress" value="50" max="100" />

                <Text render="p">Progress bar can be colored</Text>
                <Progress className="progress-success" value="64" max="100" />
                <Progress className="progress-info" value="64" max="100" />
                <Progress className="progress-warning" value="64" max="100" />
                <Progress className="progress-danger" value="64" max="100" />

                <Text render="h3">Progress Radial</Text>
                <ProgressRadial className="progress-radial" value="50" max="100" displayValue="50%" />

                <Text render="p">Progress radial can be colored</Text>
                <ProgressRadial className="text-primary" value="64" max="100" displayValue="64%" />

                <Text render="p">Progress radial can be colored with background and border colors</Text>
                <ProgressRadial className="bg-primary text-primary-content border-primary border-4" value="64" max="100" displayValue="64%" />
            </View>
        </View>
    );
}