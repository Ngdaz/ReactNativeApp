import { View, Text, Pressable } from 'react-native';
import React from 'react';

export default function GoalText({
  text,
  deleteGoal,
}: {
  text: string;
  deleteGoal: () => void;
}) {
  return (
    <Pressable onPress={deleteGoal}>
      <View>
        <Text>{text}</Text>
      </View>
    </Pressable>
  );
}
