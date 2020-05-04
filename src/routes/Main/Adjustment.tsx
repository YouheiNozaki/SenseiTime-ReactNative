import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DETAIL, ADJUSTMENTLIST } from "../../constants/path";
import { Detail, AdjustmentList } from "../../components/pages";
import { HeaderLeft } from "../Header";

const Stack = createStackNavigator();

export const AdjustmentListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ADJUSTMENTLIST}>
      <Stack.Screen name={DETAIL} component={Detail} />
      <Stack.Screen
        name={ADJUSTMENTLIST}
        component={AdjustmentList}
        options={{ headerLeft: () => <HeaderLeft /> }}
      />
    </Stack.Navigator>
  );
};
