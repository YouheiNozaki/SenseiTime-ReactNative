import React, { useCallback } from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/routers";

export const HeaderLeft = () => {
  const { dispatch } = useNavigation();
  const onPress = useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, [dispatch]);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>open</Text>
    </TouchableOpacity>
  );
};
