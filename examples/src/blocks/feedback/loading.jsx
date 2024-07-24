import React from 'react';
import { Loading, View, Text } from "luminus-daisy"

export default function LoadingBlock() {
  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
      <View className="prose prose-slate">
        <Text render="h3">Loading</Text>
        <Text render="p">Display different loading types, sizes and colors.</Text>
        <Text render='p'>Dots</Text>
        <div className="flex space-x-4">
          <Loading className="loading-dots loading-xs" />
          <Loading className="loading-dots loading-sm" />
          <Loading className="loading-dots loading-md" />
          <Loading className="loading-dots loading-lg" />
        </div>

        <Text render='p'>Ring</Text>
        <div className="flex space-x-4">
          <Loading className="loading-ring loading-xs" />
          <Loading className="loading-ring loading-sm" />
          <Loading className="loading-ring loading-md" />
          <Loading className="loading-ring loading-lg" />
        </div>

        <Text render='p'>Ball</Text>
        <div className="flex space-x-4">
          <Loading className="loading-ball loading-xs" />
          <Loading className="loading-ball loading-sm" />
          <Loading className="loading-ball loading-md" />
          <Loading className="loading-ball loading-lg" />
        </div>

        <Text render='p'>Bars</Text>
        <div className="flex space-x-4">
          <Loading className="loading-bars loading-xs" />
          <Loading className="loading-bars loading-sm" />
          <Loading className="loading-bars loading-md" />
          <Loading className="loading-bars loading-lg" />
        </div>

        <Text render='p'>Infinity</Text>
        <div className="flex space-x-4">
          <Loading className="loading-infinity loading-xs" />
          <Loading className="loading-infinity loading-sm" />
          <Loading className="loading-infinity loading-md" />
          <Loading className="loading-infinity loading-lg" />
        </div>

        <Text render='p'>Spinner</Text>
        <div className="flex space-x-4">
          <Loading className="loading-spinner loading-xs " />
          <Loading className="loading-spinner loading-sm text-primary" />
          <Loading className="loading-spinner text-secondary" />
          <Loading className="loading-spinner text-accent" />
          <Loading className="loading-spinner text-info" />
          <Loading className="loading-spinner text-success" />
          <Loading className="loading-spinner loading-md text-warning" />
          <Loading className="loading-spinner loading-lg text-error" />
        </div>
      </View>
    </View>
  );
}
