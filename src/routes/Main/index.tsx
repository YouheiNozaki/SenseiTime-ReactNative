import React, { useContext } from "react";
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  INITIAL,
  LOADING,
  HOME,
  CHOOSE_LOGIN,
  ADJUSTMENTLIST,
  USER_INFO,
} from "../../constants/path";
import { Initial, Loading, ChooseLogin } from "../../components/pages";
import { HomeNavigator as Home } from "./Home";
import { AdjustmentListNavigator as AdjustmentList } from "./Adjustment";
import { UserInfoNavigator as UserInfo } from "./UserInfo";
import * as UiContext from "../../contexts/ui";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName={HOME}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={ADJUSTMENTLIST} component={AdjustmentList} />
    </Tab.Navigator>
  );
}
function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={TabRoutes} />;
    case UiContext.Status.FIRST_OPEN:
    default:
      return <Stack.Screen name={INITIAL} component={Initial} />;
  }
}

export const AuthWithRoutes = () => {
  const uiContext = useContext(UiContext.Context);
  return (
    <Stack.Navigator
      initialRouteName={LOADING}
      headerMode="none"
      screenOptions={{ cardStyleInterpolator: forFade }}
    >
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
};
