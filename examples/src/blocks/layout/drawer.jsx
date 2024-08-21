import React from "react";
import {View, Text, Drawer} from "luminus-daisy";
import DocBlock from "../docBlock"

export default function DrawerBlock() {

    return (
        <View className="bg-white p-4 ">
            <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
                <Text render="h1">Drawer</Text>

                <DocBlock title="Drawer">
                    <Drawer>
                        <Drawer.Content labelText="Open drawer">
                        </Drawer.Content>
                        <Drawer.Side>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </Drawer.Side>
                    </Drawer>
                </DocBlock>

            </View>
        </View>
    );
}
