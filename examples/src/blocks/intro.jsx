import React from 'react';
import { View, Text } from "luminus-daisy"

export default function IntroBlock() {

  return (
    <View className="prose flex flex-col flex-grow">
      <Text render="h2">Welcome to Eitri 2.0</Text>
      <Text render="p">Eitri 2.0 is based on Tailwind and DaisyUI. You can stylize in Eitri 2.0 using Tailwind classes.</Text>

      <Text render="h3">Using colors</Text>
      <Text render="p">You can use colors on buttons, text, badges, etc.</Text>
      <Text render="p">To use colors as background, you need to use className attribute bg- with the color name.</Text>
      <Text render="h4">Some examples with View:</Text> 
      <View className="flex flex-col gap-4">
        <View className="p-4 w-full rounded bg-primary text-primary-content">{`className="bg-primary"`}</View>
        <View className="p-4 w-full rounded bg-secondary text-secondary-content">{`className="bg-secondary"`}</View>
        <View className="p-4 w-full rounded bg-accent text-accent-content">{`className="bg-accent"`}</View>
        <View className="p-4 w-full rounded bg-neutral text-neutral-content">{`className="bg-neutral"`}</View>
        <View className="p-4 w-full rounded bg-base-100 text-base-content">{`className="bg-base-100"`}</View>
        <View className="p-4 w-full rounded bg-base-200 text-base-content">{`className="bg-base-200"`}</View>
        <View className="p-4 w-full rounded bg-base-300 text-base-content">{`Use className="bg-base-300"`}</View>
        <View className="p-4 w-full rounded bg-info text-info-content">{`className="bg-info"`}</View>
        <View className="p-4 w-full rounded bg-success text-success-content">{`Use className="bg-success"`}</View>
        <View className="p-4 w-full rounded bg-warning text-warning-content">{`Use className="bg-warning"`}</View>
        <View className="p-4 w-full rounded bg-error text-error-content">{`className="bg-error"`}</View>
      </View>

      <Text render="h3">Using borders</Text>
      <Text render="p">You can use borders on buttons, text, badges, etc.</Text>
      <Text render="p">To use borders as background, you need to use className attribute border- with the color name.</Text>
      <Text render="h4">Some examples with View:</Text> 
      <View className="flex flex-col gap-4">
        <View className="p-4 w-full rounded border bg-neutral text-neutral-content">{`className="border"`}</View>
        <View className="p-4 w-full rounded border border-primary bg-neutral text-neutral-content">{`p-4className="border border-primary"`}</View>
        <View className="p-4 w-full rounded border border-secondary bg-neutral text-neutral-content">{`p-4className="border border-secondary"`}</View>
        <View className="p-4 w-full rounded border border-accent bg-neutral text-neutral-content">{`p-4className="border border-accent"`}</View>
        <View className="p-4 w-full rounded border border-2 bg-neutral text-neutral-content">{`p-4className="border border-2"`}</View>
        <View className="p-4 w-full rounded border border-4 bg-neutral text-neutral-content">{`p-4className="border border-4"`}</View>
      </View>
    </View>
  );
}

