import React from "react";
import {Steps, View, Text} from "luminus-daisy";

export default function StepsBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
            <View className="prose prose-slate">
                <Text render="h3">Steps</Text>

                <Text render="p">Display a basic step</Text>
                <Steps>
                    <Steps.Step className="step-primary">Step 1</Steps.Step>
                    <Steps.Step className="step-primary">Step 2</Steps.Step>
                    <Steps.Step>Step 3</Steps.Step>
                </Steps>

                <Text render="p">Display a vertical step</Text>
                <Steps className="steps-vertical">
                    <Steps.Step className="step-primary">Step 1</Steps.Step>
                    <Steps.Step className="step-primary">Step 2</Steps.Step>
                    <Steps.Step>Step 3</Steps.Step>
                </Steps>

                <Text render="p">Display a responsive (vertical on small screen, horizontal on large screen)</Text>
                <Steps className="steps-vertical lg:steps-horizontal">
                    <Steps.Step className="step-primary">Step 1</Steps.Step>
                    <Steps.Step className="step-primary">Step 2</Steps.Step>
                    <Steps.Step>Step 3</Steps.Step>
                </Steps>

                <Text render="p">Display a step with data content</Text>
                <Steps>
                    <Steps.Step className="step-primary" dataContent="✓">Step 1</Steps.Step>
                    <Steps.Step className="step-primary" dataContent="✓">Step 2</Steps.Step>
                    <Steps.Step dataContent="●">Step 3</Steps.Step>
                    <Steps.Step dataContent="!">Step 4</Steps.Step>
                </Steps>

                <Text render="p">Display a step with custom colors</Text>
                <Steps>
                    <Steps.Step className="step-info">Step 1</Steps.Step>
                    <Steps.Step className="step-info">Step 2</Steps.Step>
                    <Steps.Step className="step-error" dataContent="?">Step 3</Steps.Step>
                </Steps>

                <Text render="p">Display a step with scrollable wrapper</Text>
                    <Steps scrollable>
                        <Steps.Step className="step-primary">Step 1</Steps.Step>
                        <Steps.Step className="step-primary">Step 2</Steps.Step>
                        <Steps.Step>Step 3</Steps.Step>
                        <Steps.Step>Step 4</Steps.Step>
                        <Steps.Step className="step-warning">Step 5</Steps.Step>
                        <Steps.Step className="step-warning">Step 6</Steps.Step>
                        <Steps.Step>Step 7</Steps.Step>
                        <Steps.Step>Step 8</Steps.Step>
                        <Steps.Step>Step 9</Steps.Step>
                        <Steps.Step className="step-error">Step 10</Steps.Step>
                        <Steps.Step className="step-error">Step 11</Steps.Step>
                        <Steps.Step className="step-error">Step 12</Steps.Step>
                        <Steps.Step>Step 13</Steps.Step>
                        <Steps.Step>Step 14</Steps.Step>
                        <Steps.Step>Step 15</Steps.Step>
                        <Steps.Step>Step 16</Steps.Step>
                        <Steps.Step>Step 17</Steps.Step>
                        <Steps.Step>Step 18</Steps.Step>
                        <Steps.Step>Step 19</Steps.Step>
                        <Steps.Step>Step 20</Steps.Step>
                    </Steps>

            </View>
        </View>
    );
}