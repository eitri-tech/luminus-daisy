import React from 'react';
import {Timeline, View, Text, TimeText} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function TimelineBlock() {

    const iconCheck = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
        </svg>
    )

    return (
        <View className=" p-4 ">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Timeline</Text>

                <DocBlock title="Timeline with text on both sides and icon">
                    <Timeline>

                        <Timeline.Item firstItem>
                            <Timeline.Start>1984</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">First Macintosh computer</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>1998</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iMac</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>2001</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPod</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>2007</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPhone</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start>2015</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">Apple Watch</Text>
                            </Timeline.End>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Timeline with bottom side only">
                    <Timeline>
                        <Timeline.Item firstItem>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">First Macintosh computer</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iMac</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPod</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPhone</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">Apple Watch</Text>
                            </Timeline.End>
                        </Timeline.Item>

                    </Timeline>
                </DocBlock>

                <DocBlock className="Timeline with top side only">
                    <Timeline>
                        <Timeline.Item firstItem>
                            <Timeline.Start className="timeline-box">First Macintosh computer</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iMac</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iPod</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iPhone</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>

                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start className="timeline-box">Apple Watch</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Timeline with different sides">
                    <Timeline>
                        <Timeline.Item firstItem>
                            <Timeline.Start className="timeline-box">First Macintosh computer</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">iMac</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iPod</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">iPhone</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start className="timeline-box">Apple Watch</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Timeline with colorful lines">

                    <Timeline>
                        <Timeline.Item firstItem classNameLastLine="bg-primary">
                            <Timeline.Start className="timeline-box">First Macintosh computer</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item classNameFirstLine="bg-primary" classNameLastLine="bg-primary">
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">iMac</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item classNameFirstLine="bg-primary">
                            <Timeline.Start className="timeline-box">iPod</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">iPhone</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start className="timeline-box">Apple Watch</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Timeline without icons">
                    <Timeline>
                        <Timeline.Item firstItem>
                            <Timeline.Start className="timeline-box">First Macintosh computer</Timeline.Start>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.End className="timeline-box">iMac</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iPod</Timeline.Start>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.End className="timeline-box">iPhone</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start className="timeline-box">Apple Watch</Timeline.Start>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Vertical timeline with text on both sides and icon">
                    <Timeline className="timeline-vertical">
                        <Timeline.Item firstItem>
                            <Timeline.Start>1984</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">First Macintosh computer</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>1998</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iMac</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>2001</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPod</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>2007</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPhone</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start>2015</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">Apple Watch</Text>
                            </Timeline.End>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Vertical timeline with bottom side only">
                    <Timeline className="timeline-vertical">
                        <Timeline.Item firstItem>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">First Macintosh computer</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iMac</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPod</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPhone</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">Apple Watch</Text>
                            </Timeline.End>
                        </Timeline.Item>
                    </Timeline>

                </DocBlock>

                <DocBlock title="Vertical timeline with top side only">
                    <Timeline className="timeline-vertical">
                        <Timeline.Item firstItem>
                            <Timeline.Start className="timeline-box">First Macintosh computer</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iMac</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iPod</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iPhone</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>

                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start className="timeline-box">Apple Watch</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Vertical timeline with different sides">
                    <Timeline className="timeline-vertical">
                        <Timeline.Item firstItem>
                            <Timeline.Start className="timeline-box">First Macintosh computer</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">iMac</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iPod</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">iPhone</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start className="timeline-box">Apple Watch</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>
                    </Timeline>

                </DocBlock>

                <DocBlock title="Vertical timeline with colorful line">
                    <Timeline className="timeline-vertical">
                        <Timeline.Item firstItem classNameLastLine="bg-primary">
                            <Timeline.Start className="timeline-box">First Macintosh computer</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item classNameFirstLine="bg-primary" classNameLastLine="bg-primary">
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">iMac</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item classNameFirstLine="bg-primary">
                            <Timeline.Start className="timeline-box">iPod</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">iPhone</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start className="timeline-box">Apple Watch</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Vertical timeline without icons">
                    <Timeline className="timeline-vertical">
                        <Timeline.Item firstItem>
                            <Timeline.Start className="timeline-box">First Macintosh computer</Timeline.Start>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.End className="timeline-box">iMac</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start className="timeline-box">iPod</Timeline.Start>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.End className="timeline-box">iPhone</Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start className="timeline-box">Apple Watch</Timeline.Start>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Responsive: vertical by default, horizontal on large screen">
                    <Timeline className="timeline-vertical lg:timeline-horizontal">
                        <Timeline.Item firstItem>
                            <Timeline.Start>1984</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">First Macintosh computer</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>1998</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iMac</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>2001</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPod</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Start>2007</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">iPhone</Text>
                            </Timeline.End>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Start>2015</Timeline.Start>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.End className="timeline-box">
                                <Text render="p">Apple Watch</Text>
                            </Timeline.End>
                        </Timeline.Item>
                    </Timeline>
                </DocBlock>

                <DocBlock title="Timeline with icon snapped to the start">

                    <Timeline className="timeline-snap-icon max-md:timeline-compact md:text-end timeline-vertical">

                        <Timeline.Item firstItem>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.Start>
                                <TimeText>1984</TimeText>
                                <Text render="p" className="text-lg font-black">First Macintosh computer</Text>
                                The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                                personal computer. It played a pivotal role in establishing desktop publishing as a general
                                office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                                in a beige case with integrated carrying handle; it came with a keyboard and single-button
                                mouse.
                            </Timeline.Start>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.Start>
                                <TimeText>1998</TimeText>
                                <Text render="p" className="text-lg font-black">iMac</Text>
                                The iMac is a series of Macintosh desktop computers designed and built by Apple Inc. It has
                                been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                                and has evolved through seven distinct forms.
                            </Timeline.Start>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.Start>
                                <TimeText>2001</TimeText>
                                <Text render="p" className="text-lg font-black">iPod</Text>
                                The iPod is a line of portable media players and multi-purpose pocket computers designed and
                                marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months
                                after the Macintosh version of iTunes was released.
                            </Timeline.Start>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.Start>
                                <TimeText>2007</TimeText>
                                <Text render="p" className="text-lg font-black">iPhone</Text>
                                The iPhone is a line of smartphones designed and marketed by Apple Inc. All generations of the
                                iPhone use Apple's iOS mobile operating system software. The first-generation iPhone was
                                announced by Apple co-founder Steve Jobs on January 9, 2007.
                            </Timeline.Start>
                        </Timeline.Item>

                        <Timeline.Item lastItem>
                            <Timeline.Middle>
                                {iconCheck}
                            </Timeline.Middle>
                            <Timeline.Start>
                                <TimeText>2015</TimeText>
                                <Text render="p" className="text-lg font-black">Apple Watch</Text>
                                The Apple Watch is a line of smartwatches designed, manufactured, and sold by Apple Inc. It
                                incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication,
                                and integrates with iOS and other Apple products and services.
                            </Timeline.Start>
                        </Timeline.Item>

                    </Timeline>

                </DocBlock>

            </View>
        </View>
    );
}

