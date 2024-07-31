import React from 'react';
import { View, Text } from "luminus-daisy"

export default function ViewBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white prose prose-slate">
        <Text render="h3">View</Text>
        <View>Simple view</View>

        <Text render="h3">View with onClick</Text>
        <View className="cursor-pointer" onClick={() => alert("Clicked!")}>Click me</View>

    </View>
  );
}

