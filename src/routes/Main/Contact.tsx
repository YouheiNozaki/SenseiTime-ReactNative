import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CONTACT } from "../../constants/path";
import { Contact } from "../../components/pages";
import { HeaderLeft } from "../Header";

const Stack = createStackNavigator();

export const ContactNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={CONTACT}>
      <Stack.Screen
        name={CONTACT}
        component={Contact}
        options={{ headerLeft: () => <HeaderLeft /> }}
      />
    </Stack.Navigator>
  );
};
