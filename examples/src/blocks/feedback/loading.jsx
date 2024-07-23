import React from 'react';
import { Loading, View, Text } from "luminus-daisy"

export default function LoadingBlock() {
  return (
    <View className="border-solid p-4 my-4 shadow-lg rounded-md bg-white">
      <View className="prose prose-slate">
        <Text render="h3">Loading</Text>
        <Text render="p">Display different loading types and sizes</Text>
        <Text render='p'>Dots</Text>
        <div className="flex space-x-4">
          <Loading className="loading-dots" size="loading-xs" />
          <Loading className="loading-dots" size="loading-sm" />
          <Loading className="loading-dots" size="loading-md" />
          <Loading className="loading-dots" size="loading-lg" />
        </div>

        <Text render='p'>Ring</Text>
        <div className="flex space-x-4">
          <Loading className="loading-ring" size="loading-xs" />
          <Loading className="loading-ring" size="loading-sm" />
          <Loading className="loading-ring" size="loading-md" />
          <Loading className="loading-ring" size="loading-lg" />
        </div>

        <Text render='p'>Ball</Text>
        <div className="flex space-x-4">
          <Loading className="loading-ball" size="loading-xs" />
          <Loading className="loading-ball" size="loading-sm" />
          <Loading className="loading-ball" size="loading-md" />
          <Loading className="loading-ball" size="loading-lg" />
        </div>

        <Text render='p'>Bars</Text>
        <div className="flex space-x-4">
          <Loading className="loading-bars" size="loading-xs" />
          <Loading className="loading-bars" size="loading-sm" />
          <Loading className="loading-bars" size="loading-md" />
          <Loading className="loading-bars" size="loading-lg" />
        </div>

        <Text render='p'>Infinity</Text>
        <div className="flex space-x-4">
          <Loading className="loading-infinity" size="loading-xs" />
          <Loading className="loading-infinity" size="loading-sm" />
          <Loading className="loading-infinity" size="loading-md" />
          <Loading className="loading-infinity" size="loading-lg" />
        </div>

        <Text render='p'>Spinner with Colors</Text>
        <div className="flex space-x-4">
          <Loading className="loading-spinner" color="text-primary" />
          <Loading className="loading-spinner" color="text-secondary" />
          <Loading className="loading-spinner" color="text-accent" />
          <Loading className="loading-spinner" color="text-info" />
          <Loading className="loading-spinner" color="text-success" />
          <Loading className="loading-spinner" color="text-warning" />
          <Loading className="loading-spinner" color="text-error" />
        </div>
      </View>
    </View>
  );
}
