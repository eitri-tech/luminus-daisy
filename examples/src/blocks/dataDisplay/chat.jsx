import React from 'react';
import {Chat, View, Text, TimeText} from "luminus-daisy"
import DocBlock from '../docBlock';

export default function ChatBlock() {

    return (
        <View className="bg-white p-4 ">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Chat</Text>

                <DocBlock title="chat-start and chat-end">
                    <Chat className="bg-slate-300 p-2">
                        <Chat.Start>
                            <Chat.Bubble>
                                <Text render="p">It's over Anakin,</Text>
                                <Text render="p">I have the high ground,</Text>
                            </Chat.Bubble>
                        </Chat.Start>
                        <Chat.End>
                            <Chat.Bubble>
                                <Text render="p">You underestimate my power!</Text>
                            </Chat.Bubble>
                        </Chat.End>
                    </Chat>
                </DocBlock>

                <DocBlock title="Chat with image">
                    <Chat className="bg-slate-300 p-2">
                        <Chat.Start>
                            <Chat.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Tailwind CSS chat bubble component"
                            />
                            <Chat.Bubble>
                                <Text render="p">It was said that you would, destroy the Sith, not join them.</Text>
                            </Chat.Bubble>
                        </Chat.Start>
                        <Chat.Start>
                            <Chat.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Tailwind CSS chat bubble component"
                            />
                            <Chat.Bubble>
                                <Text render="p">It was you who would bring balance to the Force.</Text>
                            </Chat.Bubble>
                        </Chat.Start>
                        <Chat.Start>
                            <Chat.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Tailwind CSS chat bubble component"
                            />
                            <Chat.Bubble>
                                <Text render="p">Not leave it in Darkness.</Text>
                            </Chat.Bubble>
                        </Chat.Start>
                    </Chat>
                </DocBlock>

                <DocBlock title="Chat with image, header and footer">
                    <Chat className="bg-slate-300 p-2">
                        <Chat.Start>
                            <Chat.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Tailwind CSS chat bubble component"
                            />
                            <Chat.Header>
                                Obi-Wan Kenobi
                                <TimeText className="text-xs opacity-50">{" "}12:45</TimeText>
                            </Chat.Header>
                            <Chat.Bubble>
                                <Text render="p">You were the chosen one!</Text>
                            </Chat.Bubble>
                            <Chat.Footer>
                                <Text render="p" className="opacity-50">Delivered</Text>
                            </Chat.Footer>
                        </Chat.Start>
                        <Chat.End>
                            <Chat.Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Tailwind CSS chat bubble component"
                            />
                            <Chat.Header>
                                Anakin
                                <TimeText className="text-xs opacity-50">{" "}12:46</TimeText>
                            </Chat.Header>
                            <Chat.Bubble>
                                <Text render="p">I hate you</Text>
                            </Chat.Bubble>
                            <Chat.Footer>
                                <Text render="p" className="opacity-50">Seen at 12:46</Text>
                            </Chat.Footer>
                        </Chat.End>
                    </Chat>
                </DocBlock>

                <DocBlock title="Chat with header and footer">
                    <Chat className="bg-slate-300 p-2">
                        <Chat.Start>
                            <Chat.Header>
                                Obi-Wan Kenobi
                                <TimeText className="text-xs opacity-50">{" "}2 hours ago</TimeText>
                            </Chat.Header>
                            <Chat.Bubble>
                                <Text render="p">You were the chosen one!</Text>
                            </Chat.Bubble>
                            <Chat.Footer>
                                <Text render="p" className="opacity-50">Seen</Text>
                            </Chat.Footer>
                        </Chat.Start>

                        <Chat.Start>
                            <Chat.Header>
                            Obi-Wan Kenobi
                                <TimeText className="text-xs opacity-50">{" "}2 hours ago</TimeText>
                            </Chat.Header>
                            <Chat.Bubble>
                                <Text render="p">I loved you</Text>
                            </Chat.Bubble>
                            <Chat.Footer>
                                <Text render="p" className="opacity-50">Delivered</Text>
                            </Chat.Footer>
                        </Chat.Start>
                    </Chat>
                </DocBlock>

                <DocBlock title="Chat Bubble with colors">
                    <Chat.Start>
                        <Chat.Bubble className="chat-bubble-primary">
                            <Text render="p">What kind of nonsense is this</Text>
                        </Chat.Bubble>
                    </Chat.Start>
                    <Chat.Start>
                        <Chat.Bubble className="chat-bubble-secondary">
                            <Text render="p">Put me on the Council and not make me a Master!??</Text>
                        </Chat.Bubble>
                    </Chat.Start>
                    <Chat.Start>
                        <Chat.Bubble className="chat-bubble-accent">
                            <Text render="p">    That's never been done in the history of the Jedi. It's insulting!</Text>
                        </Chat.Bubble>
                    </Chat.Start>

                    <Chat.End>
                        <Chat.Bubble className="chat-bubble-info">
                            <Text render="p">Calm down, Anakin.</Text>
                        </Chat.Bubble>
                    </Chat.End>
                    <Chat.End>
                        <Chat.Bubble className="chat-bubble-success">
                            <Text render="p">You have been given a great honor.</Text>
                        </Chat.Bubble>
                    </Chat.End>
                    <Chat.End>
                        <Chat.Bubble className="chat-bubble-warning">
                            <Text render="p">To be on the Council at your age.</Text>
                        </Chat.Bubble>
                    </Chat.End>
                    <Chat.End>
                        <Chat.Bubble className="chat-bubble-error">
                            <Text render="p">It's never happened before.</Text>
                        </Chat.Bubble>
                    </Chat.End>



                </DocBlock>

            </View>
        </View>
    );
}

