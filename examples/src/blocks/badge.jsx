import React from 'react';
import { Badge, View, Text } from "luminus-daisy"

export default function BadgeBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md ">
        <View className="prose prose-slate">
          <Text render="h3">Badge</Text>
        </View>
        <View className="m-2 mt-10 gap-2 flex">
          <Badge className="badge-outline">default</Badge>
          <Badge className="badge-primary badge-outline">primary</Badge>
          <Badge className="badge-secondary badge-outline">secondary</Badge>
          <Badge className="badge-accent badge-outline">accent</Badge>
        </View>
        <View className="m-2 mt-10 gap-2 flex">
          <Badge className="badge-lg">large</Badge>
          <Badge className="badge-md">medium</Badge>
          <Badge className="badge-sm">small</Badge>
          <Badge className="badge-xs">x-small</Badge>
        </View>
    </View>
  );
}

