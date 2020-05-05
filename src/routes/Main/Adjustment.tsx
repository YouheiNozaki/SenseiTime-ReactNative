import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DETAIL, ADJUSTMENTLIST } from "../../constants/path";
import { Detail, AdjustmentList } from "../../components/pages";
import { HeaderLeft, headerTintColor, headerStyle } from "../Header";
import { COLOR } from "../../constants/theme";

const cardStyle = {
  backgroundColor: COLOR.WHITE,
};
const Stack = createStackNavigator();

export const AdjustmentListNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ADJUSTMENTLIST}
      screenOptions={{
        cardStyle,
        headerTintColor,
        headerStyle,
      }}
    >
      <Stack.Screen
        name={ADJUSTMENTLIST}
        component={AdjustmentList}
        options={{ headerLeft: () => <HeaderLeft />, title: "調整一覧" }}
      />
      <Stack.Screen
        name={DETAIL}
        component={Detail}
        options={{ title: "Detail" }}
      />
    </Stack.Navigator>
  );
};
