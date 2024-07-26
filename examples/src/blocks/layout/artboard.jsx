import React from "react";
import {Artboard, Text, View} from "luminus-daisy";

export default function ArtboardBlock() {
    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Artboard</Text>

                <Text render="p">Artboard size 1</Text>
                <Artboard className="phone-1 artboard-demo">320x568</Artboard>

                <Text render="p">Artboard size 2</Text>
                <Artboard className="phone-2 artboard-demo">375x667</Artboard>

                <Text render="p">Artboard size 3</Text>
                <Artboard className="phone-3 artboard-demo">414x736</Artboard>

                <Text render="p">Artboard size 4</Text>
                <Artboard className="phone-4 artboard-demo">375×812</Artboard>

                <Text render="p">Artboard size 5</Text>
                <Artboard className="phone-5 artboard-demo">414×896</Artboard>

                <Text render="p">Artboard size 6</Text>
                <Artboard className="phone-6 artboard-demo">320×1024</Artboard>

                <Text render="p">Artboard horizontal size 1 (568×320)</Text>
                <Artboard className="artboard-demo artboard-horizontal phone-1">568×320</Artboard>

                <Text render="p">Artboard horizontal size 2 (667×375)</Text>
                <Artboard className="artboard-demo artboard-horizontal phone-2">667×375</Artboard>

                <Text render="p">Artboard horizontal size 3 (736×414)</Text>
                <Artboard className="artboard-demo artboard-horizontal phone-3">736×414</Artboard>

                <Text render="p">Artboard horizontal size 4 (812×375)</Text>
                <Artboard className="artboard-demo artboard-horizontal phone-4">812×375</Artboard>

                <Text render="p">Artboard horizontal size 5 (896×414)</Text>
                <Artboard className="artboard-demo artboard-horizontal phone-5">896×414</Artboard>

                <Text render="p">Artboard horizontal size 6 (1024×320)</Text>
                <Artboard className="artboard-demo artboard-horizontal phone-6">1024×320</Artboard>

            </View>
        </View>
    );
}