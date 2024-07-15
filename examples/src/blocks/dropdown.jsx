import React from 'react';
import { View, Text, Dropdown } from "luminus-daisy"

export default function DropdownBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white prose prose-slate">
        <Text render="h3">Dropdown</Text>
        <Dropdown>
          <Dropdown.Button>Click</Dropdown.Button>
          <Dropdown.Items>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>
    </View>
  );
}

