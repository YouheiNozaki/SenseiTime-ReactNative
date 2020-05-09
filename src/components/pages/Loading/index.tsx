import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as UiContext from "../../../contexts/ui";
import { COLOR } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.MAIN,
  },
});

function ChangeStateButton(props: { state: UiContext.Status }) {
  const { setApplicationState } = useContext(UiContext.Context);
  const { state } = props;
  return (
    <TouchableOpacity onPress={() => setApplicationState(state)}>
      <Text>Change state to {state}</Text>
    </TouchableOpacity>
  );
}

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ChangeStateButton state={UiContext.Status.AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.UN_AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.FIRST_OPEN} />
    </View>
  );
};
