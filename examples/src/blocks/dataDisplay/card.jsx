import React from 'react';
import { Card, View, Text, Button } from "luminus-daisy";

export default function CardBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white prose prose-slate">
            <Text render="h3">Card</Text>
            <Text render="p">This is an example of a card component using DaisyUI.</Text>

            <Card className="card bg-base-100 w-96 shadow-xl">
                <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" rounded />
                <Card.Body className="card-body">
                    <Card.Title >Shoes!</Card.Title>
                    <Card.Text>If a dog chews shoes whose shoes does he choose?</Card.Text>
                    <Card.Actions className="card-actions justify-end">
                        <Button className="btn btn-primary">Buy Now</Button>
                    </Card.Actions>
                </Card.Body>
            </Card>

        </View>
    );
}
