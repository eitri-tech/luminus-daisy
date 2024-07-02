import React from 'react';
import { Button, View, Text } from "luminus-daisy"

export default function ButtonBlock() {

  

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
        <View className="prose prose-slate">
          <Text.H3>Button</Text.H3>
          <Text.P>Display a button</Text.P>
          <Button>Botão</Button>
          <Text.P>Button can be primary</Text.P>
          <Button.Primary>Botão</Button.Primary>
          <Text.P>And can use Daisy or Tailwind Classes</Text.P>
          <Button.Primary className="w-full">Botão</Button.Primary>
        </View>
      </View>
  );
}

