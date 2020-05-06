import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DETAIL, HOME } from "../../constants/path";
import { Detail, Home } from "../../components/pages";
import { HeaderLeft, headerTintColor, headerStyle } from "../Header";
import { COLOR } from "../../constants/theme";

const cardStyle = {
  backgroundColor: COLOR.WHITE,
};
const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName={HOME}
      screenOptions={{
        cardStyle,
        headerTintColor,
        headerStyle,
      }}
    >
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{ headerLeft: () => <HeaderLeft />, title: "Home" }}
      />
      <Stack.Screen
        name={DETAIL}
        component={Detail}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
};
