import React from 'react';
import { Badge, View, Text, Image, Button } from "luminus-daisy"

export default function IntroBlock() {

  return (
    <View className="bg-white p-4 flex row-auto ">
      <View className="prose prose-slate mb-4 rounded-sm container max-w-5xl m-auto">
        <Text render="h1">Eitri DS</Text>
        <Text render="h4" className="font-bold">Luminus is a suite of visual components for building interfaces.</Text>
        <Text render="p">It is the official library used by Eitri for building Eitri-apps.</Text>
        <Badge className="badge-accent badge-outline">Versão 1.0</Badge>
        <Button onClick={() => { window.location.reload()}} className="btn-primary">Botão</Button>
      </View>
      <View>
        <Image src="https://fakeimg.pl/120x120" width={120} height={120} />
      </View>
      
    </View>
  );
}

