import React from 'react';
import { Button, View, Text } from "@luminus/daisy"

export default function ButtonBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
        <View className="prose prose-slate">
          <Text render="h3">Button</Text>
          <Text render="p">Display a button</Text>
          <Button>Botão</Button>
          <Text render="p">Button can be primary</Text>
          <Button.Primary>Botão</Button.Primary>
          <Text render="p">And can use Daisy or Tailwind Classes</Text>
          <Button.Primary className="w-full">Botão</Button.Primary>
        </View>
      </View>
  );
}

