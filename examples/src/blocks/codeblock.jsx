import React from 'react';
import { View, Text } from "luminus-daisy"

export default function Codeblock(props) {

  return (
    <View className="mockup-code bg-neutral-300 p-4">
      <Text render="pre">
        <Text render="code">{props.children}</Text>
      </Text>
    </View>
  );
}

