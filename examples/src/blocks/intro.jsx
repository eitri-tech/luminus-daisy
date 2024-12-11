import React from 'react';
import { View, Text } from "luminus-daisy"

export default function IntroBlock() {

  return (
    <View className="prose flex flex-col flex-grow">
      <Text render="h2">Last News</Text>
      <Text render="ul">
      <Text render="li">
          Luminus 2 is now available on npm. You can install it with npm or yarn.
      </Text>
      <Text render="li">
          Now You can use Luminus 2 on Eitri.
      </Text>
      </Text>
    </View>
  );
}

