import React from 'react';
import {View, Text, Countdown} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function CountdownBlock() {
    const maxStartCounter = 99;
    const initialCounter = 12 * 3600;

    const [counter, setCounter] = React.useState(maxStartCounter);
    const [counterHour, setCounterHour] = React.useState(initialCounter);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prev => (prev === 0 ? maxStartCounter : prev - 1));
            setCounterHour(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const convertCounter = (counter) => {
        const hours = Math.floor(counter / 3600);
        const minutes = Math.floor((counter % 3600) / 60);
        const seconds = counter % 60;
        return {hours, minutes, seconds};
    };

    const {hours, minutes, seconds} = convertCounter(counterHour);

    return (
        <View className="bg-white p-4 ">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">CountdownBlock</Text>

                <DocBlock title="Countdown" subtitle="Value must be a number between 0 and 99." >
                    <Countdown
                        counter={counter}
                    />
                </DocBlock>

                <DocBlock title="Large text">
                    <Countdown
                        className="font-mono text-6xl"
                        counter={counter}
                    />
                </DocBlock>

                <DocBlock title="Clock countdown">
                    <Countdown className="font-mono text-2xl" counter={hours} />h
                    <Countdown className="font-mono text-2xl" counter={minutes} />m
                    <Countdown className="font-mono text-2xl" counter={seconds} />s
                </DocBlock>

                <DocBlock title="Clock countdown with colons">
                    <Countdown className="font-mono text-2xl" counter={hours} />:
                    <Countdown className="font-mono text-2xl" counter={minutes} />:
                    <Countdown className="font-mono text-2xl" counter={seconds} />
                </DocBlock>

                <DocBlock title="Large text with labels">
                    <Countdown className="font-mono text-2xl" counter={"15"} />days
                    <Countdown className="font-mono text-2xl" counter={hours} />hours
                    <Countdown className="font-mono text-2xl" counter={minutes} />min
                    <Countdown className="font-mono text-2xl" counter={seconds} />sec
                </DocBlock>

                <DocBlock title="Large text with labels under">
                    <View className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <View className="flex flex-col">
                            <Countdown className="font-mono text-2xl" counter={"15"} />days
                        </View>
                        <View className="flex flex-col">
                            <Countdown className="font-mono text-2xl" counter={hours} />hours
                        </View>
                        <View className="flex flex-col">
                            <Countdown className="font-mono text-2xl" counter={minutes} />min
                        </View>
                        <View className="flex flex-col">
                            <Countdown className="font-mono text-2xl" counter={seconds} />sec
                        </View>
                    </View>
                </DocBlock>

                <DocBlock title="In boxes">
                    <View className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <View className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <Countdown className="font-mono text-2xl" counter={"15"} />days
                        </View>
                        <View className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <Countdown className="font-mono text-2xl" counter={hours} />hours
                        </View>
                        <View className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <Countdown className="font-mono text-2xl" counter={minutes} />min
                        </View>
                        <View className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <Countdown className="font-mono text-2xl" counter={seconds} />sec
                        </View>
                    </View>
                </DocBlock>

            </View>
        </View>
    );
}

