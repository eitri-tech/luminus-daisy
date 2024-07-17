import React from 'react';

import {Link, View, Text} from "luminus-daisy"

export default function LinkBlock() {
    return (
        <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white block w-100">
            <View className="prose prose-slate">
                <Text render="h3">Link</Text>
                <Text render="p">Display a link</Text>
                <Link href="#">Link</Link>
                <Text render="p">Link can be primary</Text>
                <Link href="#" className="link-primary">Link</Link>
                <Text render="p">And can use Daisy or Tailwind Classes</Text>
                <Link href="#" className="link-secondary w-full">Link</Link>
            </View>
        </View>
    );
}