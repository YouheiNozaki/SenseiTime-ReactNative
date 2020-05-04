import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const InputPlans = () => {
  return (
    <View style={styles.container}>
      <Text>勤務時間を登録</Text>
    </View>
  );
};
