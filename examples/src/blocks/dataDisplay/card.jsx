import React from 'react';
import {Card, View, Text, Button, Image, Badge} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function CardBlock() {
    return (
        <View className="bg-white p-4">
            <View className="mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h3">Card</Text>
                <Text render="p">This is an example of a card component using DaisyUI.</Text>

                <DocBlock title="Card">
                    <Card className='rounded-lg bg-base-100 w-96 shadow-xl'>
                        <Card.Image
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg"
                        />
                        <Card.Body>
                            <Card.Title>Shoes!</Card.Title>
                            <Text render="p">If a dog chews shoes whose shoes does he choose?</Text>
                            <Card.Actions className="justify-end">
                                <Button className="btn-primary">Buy Now</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Compact card (less padding for `card-body`)">
                    <Card className='rounded-lg card-compact bg-base-100 w-96 shadow-xl'>
                        <Card.Image
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg"
                        />
                        <Card.Body>
                            <Card.Title>Shoes!</Card.Title>
                            <Text render="p">If a dog chews shoes whose shoes does he choose?</Text>
                            <Card.Actions className="justify-end">
                                <Button className="btn-primary">Buy Now</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Card with badge">
                    <Card className='rounded-lg bg-base-100 w-96 shadow-xl'>
                        <Card.Image
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg"
                        />
                        <Card.Body>
                            <Card.Title>
                                Shoes!
                                <Badge className="badge-secondary">New</Badge>
                            </Card.Title>
                            <Text render="p">If a dog chews shoes whose shoes does he choose?</Text>
                            <Card.Actions className="justify-end">
                                <Badge className="badge-outline">Fashion</Badge>
                                <Badge className="badge-outline">Products</Badge>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Card with bottom image">
                    <Card className='rounded-lg bg-base-100 w-96 shadow-xl'>
                        <Card.Body>
                            <Card.Title>
                                Shoes!
                            </Card.Title>
                            <Text render="p">If a dog chews shoes whose shoes does he choose?</Text>
                        </Card.Body>
                        <Card.Image
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg"
                        />
                    </Card>
                </DocBlock>

                <DocBlock title="Card with centered content and paddings">
                    <Card className='rounded-lg bg-base-100 w-96 shadow-xl'>
                        <View className="px-10 pt-10">
                            <Card.Image
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-lg"
                            />
                        </View>
                        <Card.Body className="items-center text-center">
                            <Card.Title>
                                Shoes!
                            </Card.Title>
                            <Text render="p">If a dog chews shoes whose shoes does he choose?</Text>
                            <Card.Actions>
                                <Button className="btn-primary">Buy Now</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Card with image overlay">
                    <Card className='rounded-lg bg-base-100 image-full w-96 shadow-xl'>
                        <Card.Image
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-lg"
                        />
                        <Card.Body>
                            <Card.Title>
                                Shoes!
                            </Card.Title>
                            <Text render="p">If a dog chews shoes whose shoes does he choose?</Text>
                            <Card.Actions className="justify-end">
                                <Button className="btn-primary">Buy Now</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Card with no image">
                    <Card className='rounded-lg bg-base-100 image-full w-96 shadow-xl'>
                        <Card.Body>
                            <Card.Title>
                                Card title!
                            </Card.Title>
                            <Text render="p">If a dog chews shoes whose shoes does he choose?</Text>
                            <Card.Actions className="justify-end">
                                <Button className="btn-primary">Buy Now</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Card with custom color">
                    <Card className='rounded-lg bg-primary text-primary-content w-96'>
                        <Card.Body>
                            <Card.Title>
                                Card title!
                            </Card.Title>
                            <Text render="p">If a dog chews shoes whose shoes does he choose?</Text>
                            <Card.Actions className="justify-end">
                                <Button>Buy Now</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Centered card with neutral color">
                    <Card className='rounded-lg bg-neutral text-neutral-content w-96'>
                        <Card.Body className="items-center text-center">
                            <Card.Title>
                                Cookies!
                            </Card.Title>
                            <Text render="p">We are using cookies for no reason.</Text>
                            <Card.Actions className="justify-end">
                                <Button className="btn-primary">Accept</Button>
                                <Button className="btn-ghost">Deny</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Card with action on top">
                    <Card className='rounded-lg bg-base-100 w-96 shadow-xl'>
                        <Card.Body>
                            <Card.Actions className="justify-end">
                                <Button className="btn-square btn-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </Button>
                                <Text render="p">We are using cookies for no reason.</Text>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Card glass">
                    <Card className='rounded-lg glass w-96'>
                        <Card.Image
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="car!"
                            className="rounded-lg"
                        />
                        <Card.Body>
                            <Card.Title>
                                Life hack
                            </Card.Title>
                            <Text render="p">How to park your car at your garage?</Text>
                            <Card.Actions className="justify-end">
                                <Button className="btn-primary">Learn now!</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

                <DocBlock title="Card with image on side">
                    <Card className='card-side bg-base-100 shadow-xl'>
                        <Card.Image
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Movie"
                            className="rounded-lg"
                        />
                        <Card.Body>
                            <Card.Title>
                                New movie is released!
                            </Card.Title>
                            <Text render="p">Click the button to watch on Jetflix app.</Text>
                            <Card.Actions className="justify-end">
                                <Button className="btn-primary">Watch</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>


                <DocBlock title="Responsive card (vertical on small screen, horizontal on large screen)">
                    <Card className='lg:card-side bg-base-100 shadow-xl'>
                        <Card.Image
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album"
                            className="rounded-lg"
                        />
                        <Card.Body>
                            <Card.Title>
                                New album is released!
                            </Card.Title>
                            <Text render="p">Click the button to listen on Spotiwhy app.</Text>
                            <Card.Actions className="justify-end">
                                <Button className="btn-primary">Listen</Button>
                            </Card.Actions>
                        </Card.Body>
                    </Card>
                </DocBlock>

            </View>
        </View>
    );
}
