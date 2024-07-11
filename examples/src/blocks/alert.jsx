import React from 'react';
import { Alert, View, Text } from "@luminus/daisy"

export default function AlertBlock() {

  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white prose prose-slate">
        <Text render="h3">Alert</Text>
        <Alert role="alert" className="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <Text>12 unread messages. Tap to see.</Text>
      </Alert>
    </View>
  );
}

