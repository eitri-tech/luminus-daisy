import React from 'react';
import { Button, View, Text } from "luminus-daisy"

export default function ButtonBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md">
        <View className="prose">
          <Text render="h3">Button</Text>
          <Text render="p" className="text-error">Display a button</Text>
          <Button className="btn-error">Botão</Button>
          <Text render="p">Button can be primary</Text>
          <Button className="btn-primary btn-outline">Botão</Button>
          <Text render="p">And can use Daisy or Tailwind Classes</Text>
          <Button className="btn-accent w-full" >Botão</Button>
        </View>
      </View>
  );
}

