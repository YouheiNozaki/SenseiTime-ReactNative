import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context, Status } from "../../../contexts/ui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const SignUp = () => {
  const { setApplicationState } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.AUTHORIZED)}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
