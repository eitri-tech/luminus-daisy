import React from 'react';
import { Button, Text, Divider, View, Loading } from "luminus-daisy"
import Codeblock from './codeblock';

export default function ButtonBlock() {

  return (
    <>
      <>
      <Text render="h1">Button</Text>
      <Text render="p">This component displays a button.</Text>
      <Text render="h2">Examples</Text>
      <Text render="h3">Basic</Text>
      <Text render="p">The basic button.</Text>
      <View className="flex gap-4">
        <Button>Basic Button</Button>
      </View>
      <View className="mt-4">
        <Codeblock>
          {`
<Button>Basic Button</Button>
      `}
        </Codeblock>
      </View>
      <Divider />
      </>
      <>
      <Text render="h3">Colors</Text>
      <Text render="p">You can use colors on buttons.</Text>
      <View className="flex gap-4">
        <Button className="btn-primary">Primary Button</Button>
        <Button className="btn-secondary">Secondary Button</Button>
        <Button className="btn-accent">Accent Button</Button>
        <Button className="btn-neutral">Neutral Button</Button>
      </View>
      <View className="mt-4">
        <Codeblock>
          {`
<Button className="btn-primary">Primary Button</Button>
<Button className="btn-secondary">Secondary Button</Button>
<Button className="btn-accent">Accent Button</Button>
<Button className="btn-neutral">Neutral Button</Button>
      `}
        </Codeblock>
      </View>
      <Divider />
      </>
      <>
      <Text render="h3">Sizes</Text>
      <Text render="p">You can determine the size of the button. The default size is medium (md).</Text>
      <View className="flex gap-4">
        <Button className="btn-xs">XS Button</Button>
        <Button className="btn-sm">SM Button</Button>
        <Button className="btn">MD Button</Button>
        <Button className="btn-lg">LG Button</Button>
      </View>
      <View className="mt-4">
        <Codeblock>
          {`
<Button className="btn-xs">XS Button</Button>
<Button className="btn-sm">SM Button</Button>
<Button className="btn">MD Button</Button>
<Button className="btn-lg">LG Button</Button>
      `}
        </Codeblock>
      </View>
      <Divider />
      </>
      <>
      <Text render="h3">Loading</Text>
      <Text render="p">You can put an icon before or after the text, using SVG.</Text>
      <View className="flex gap-4">
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Favorite
      </Button>
      </View>
      <View className="mt-4">
        <Codeblock>
          {`
<Button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
  Favorite
</Button>
      `}
        </Codeblock>
      </View>
      <Divider />
      </>
      <Text render="h3">Icons</Text>
      <Text render="p">You can put an icon before or after the text, using SVG.</Text>
      <View className="flex gap-4">
      <Button>
        <Loading />
        Finish order
      </Button>
      </View>
      <View className="mt-4">
        <Codeblock>
          {`
<Button>
  <Loading />
  Finish order
</Button>
      `}
        </Codeblock>
      </View>
      <Divider />
    </>
  );
}

