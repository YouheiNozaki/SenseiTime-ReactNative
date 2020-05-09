import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { COLOR } from "../../../constants/theme";
import { IconButton } from "../../atoms/IconButton";

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.DENGER,
  },
});

export interface RemoveWorkTime {
  (id: string): void;
}

interface Props {
  state: {
    id: string;
  };
  actions: {
    removeWorkTime: RemoveWorkTime;
  };
}

export const Component = (props: Props) => {
  const {
    state: { id },
    actions: { removeWorkTime },
  } = props;

  const onPress = useCallback(() => {
    removeWorkTime(id);
  }, [id, removeWorkTime]);

  return <IconButton onPress={onPress} icon="delete" style={styles.button} />;
};
