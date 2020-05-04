import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { INPUT_WORKTIME, INPUT_PLANS } from "../../../constants/path";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Input = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Input</Text>
      <TouchableOpacity onPress={() => navigate(INPUT_PLANS)}>
        <Text>予定を作成する</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(INPUT_WORKTIME)}>
        <Text>勤務時間を登録する</Text>
      </TouchableOpacity>
    </View>
  );
};
