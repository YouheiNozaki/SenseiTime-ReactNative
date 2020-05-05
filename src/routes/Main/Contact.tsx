import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CONTACT } from "../../constants/path";
import { Contact } from "../../components/pages";
import { HeaderLeft, headerTintColor, headerStyle } from "../Header";
import { COLOR } from "../../constants/theme";

const cardStyle = {
  backgroundColor: COLOR.WHITE,
};
const Stack = createStackNavigator();

export const ContactNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={CONTACT}
      screenOptions={{
        cardStyle,
        headerTintColor,
        headerStyle,
      }}
    >
      <Stack.Screen
        name={CONTACT}
        component={Contact}
        options={{ headerLeft: () => <HeaderLeft />, title: "Contact" }}
      />
    </Stack.Navigator>
  );
};
