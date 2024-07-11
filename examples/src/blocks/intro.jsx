import React from 'react';
import { Badge, View, Text } from "@luminus/daisy"

export default function IntroBlock() {

  return (
    <View>
      <View className="prose prose-slate mb-4">
          <Text render="h1">Luminus Daisy</Text>
          <Text render="p">Luminus is a suite of visual components for building interfaces.</Text>
          <Text render="p">It is the official library used by Eitri for building Eitri-apps.</Text>
          <Badge>Versão 1.0</Badge>
        </View>
        <View className="prose mt-4">
          <Text render="h2">Component List</Text>
        </View>
    </View>
  );
}

