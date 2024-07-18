import React from "react";

import {Rating, View, Text} from "luminus-daisy"

export default function RatingBlock() {
    const [rating, setRating] = React.useState(0);
    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Rating</Text>

                <Text render="p">A simple rating component</Text>
                <Rating>
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                </Rating>


                <Text render="p">A rating with onChange: {rating}</Text>
                <Rating onChange={value => setRating(value)}>
                    <Rating.Item name="rating-1" value={1} />
                    <Rating.Item name="rating-2" value={2} />
                    <Rating.Item name="rating-3" value={3} />
                    <Rating.Item name="rating-4" value={4} />
                    <Rating.Item name="rating-5" value={5} />
                </Rating>

                <Text render="h2">Rating with mask-star-2 with warning color</Text>
                <Rating className="warning">
                    <Rating.Item name="rating-1" className="mask-star-2 bg-orange-400" />
                    <Rating.Item name="rating-2" className="mask-star-2 bg-orange-400" defaultChecked />
                    <Rating.Item name="rating-3" className="mask-star-2 bg-orange-400" />
                    <Rating.Item name="rating-4" className="mask-star-2 bg-orange-400" />
                    <Rating.Item name="rating-5" className="mask-star-2 bg-orange-400" />
                </Rating>


                <Text render="h2">Rating with mask-heart with multiple colors</Text>
                <Rating>
                    <Rating.Item name="rating-1" className="mask-heart bg-red-400" />
                    <Rating.Item name="rating-2" className="mask-heart bg-blue-400" />
                    <Rating.Item name="rating-3" className="mask-heart bg-green-400" defaultChecked />
                    <Rating.Item name="rating-4" className="mask-heart bg-yellow-400" />
                    <Rating.Item name="rating-5" className="mask-heart bg-purple-400" />
                </Rating>


                <Text render="h2">Rating with mask-star-2 with green-500 color</Text>
                <Rating className="green-500">
                    <Rating.Item name="rating-1" className="mask-star-2 bg-green-500" />
                    <Rating.Item name="rating-2" className="mask-star-2 bg-green-500" />
                    <Rating.Item name="rating-3" className="mask-star-2 bg-green-500" defaultChecked />
                    <Rating.Item name="rating-4" className="mask-star-2 bg-green-500" />
                    <Rating.Item name="rating-5" className="mask-star-2 bg-green-500" />
                </Rating>

                <Text render="h2">Rating with sizes</Text>
                <Rating className="rating-xs">
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                </Rating>

                <Rating className="rating-sm">
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                    <Rating.Item />
                </Rating>

                <Text render="h2">Rating half stars</Text>
                <Rating className="rating-lg rating-half">
                    <Rating.Item className="mask-star-2 mask-half-1 bg-green-500"  name="rating-10" />
                    <Rating.Item className="mask-star-2 mask-half-2 bg-green-500"  name="rating-10" />

                    <Rating.Item className="mask-star-2 mask-half-1 bg-green-500"  name="rating-10" />
                    <Rating.Item className="mask-star-2 mask-half-2 bg-green-500"  name="rating-10" />

                    <Rating.Item className="mask-star-2 mask-half-1 bg-green-500"  name="rating-10" />
                    <Rating.Item className="mask-star-2 mask-half-2 bg-green-500"  name="rating-10" />

                    <Rating.Item className="mask-star-2 mask-half-1 bg-green-500"  name="rating-10" />
                    <Rating.Item className="mask-star-2 mask-half-2 bg-green-500"  name="rating-10" />
                </Rating>
            </View>
        </View>
    );
}