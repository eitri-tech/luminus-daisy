import React from 'react';
import { Button, View, Text } from "luminus-daisy"

export default function ButtonBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
        <View className="prose prose-slate">
          <Text render="h3">Button</Text>
          <Text render="p">Display a button</Text>
          <Button>Botão</Button>
          <Text render="p">Button can be primary</Text>
          <Button className="btn-primary">Botão</Button>
          <Text render="p">And can use Daisy or Tailwind Classes</Text>
          <Button className="btn-secondary w-full">Botão</Button>
        </View>
      </View>
  );
}

