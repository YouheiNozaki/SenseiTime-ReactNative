import React, { useCallback } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/routers";
import { COLOR } from "../../constants/theme";

export const HeaderLeft = () => {
  const { dispatch } = useNavigation();
  const onPress = useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, [dispatch]);
  return (
    <Icon.Button
      name="bars"
      color={COLOR.WHITE}
      backgroundColor={COLOR.MAIN}
      onPress={onPress}
    />
  );
};
