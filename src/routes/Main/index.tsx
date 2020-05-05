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
  CONTACT,
  INPUT,
  INPUT_WORKTIME,
  INPUT_PLANS,
  SIGN_IN,
  SIGN_UP,
} from "../../constants/path";
import {
  Initial,
  Loading,
  ChooseLogin,
  Input,
  InputWorkTime,
  InputPlans,
  SignIn,
  SignUp,
} from "../../components/pages";
import { HomeNavigator as Home } from "./Home";
import { AdjustmentListNavigator as AdjustmentList } from "./Adjustment";
import { UserInfoNavigator as UserInfo } from "./UserInfo";
import { ContactNavigator as Contact } from "./Contact";
import * as UiContext from "../../contexts/ui";

import { COLOR } from "../../constants/theme";
import { headerStyle, headerTintColor } from "../Header";

// スタイル
const cardStyle = {
  backgroundColor: COLOR.MAIN,
};
const drawerStyle = {
  backgroundColor: COLOR.MAIN,
};

// Natigatorの初期化
const Stack = createStackNavigator();
const ModalStack = createStackNavigator();
const ChooseLoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeDrawer = createDrawerNavigator();
const AdjustmentlistDrawer = createDrawerNavigator();
const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

// Drawerの設定
const drawerContentOptions = {
  activeTintColor: COLOR.MAIN_DARK,
  inactiveTintColor: COLOR.WHITE,
};

function HomeWithDrawer() {
  return (
    <HomeDrawer.Navigator
      initialRouteName={HOME}
      drawerStyle={drawerStyle}
      drawerContentOptions={drawerContentOptions}
    >
      <HomeDrawer.Screen name={HOME} component={Home} />
      <HomeDrawer.Screen name={USER_INFO} component={UserInfo} />
      <HomeDrawer.Screen name={CONTACT} component={Contact} />
    </HomeDrawer.Navigator>
  );
}

function AdhustmentlistDrawer() {
  return (
    <AdjustmentlistDrawer.Navigator
      initialRouteName={ADJUSTMENTLIST}
      drawerStyle={drawerStyle}
      drawerContentOptions={drawerContentOptions}
    >
      <AdjustmentlistDrawer.Screen
        name={ADJUSTMENTLIST}
        component={AdjustmentList}
      />
      <AdjustmentlistDrawer.Screen name={USER_INFO} component={UserInfo} />
      <AdjustmentlistDrawer.Screen name={CONTACT} component={Contact} />
    </AdjustmentlistDrawer.Navigator>
  );
}

const getActiveRouteName = (state: any): string => {
  if (!state || !state.routes) {
    return "";
  }
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
};

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={(props: any) => {
        const routeName = getActiveRouteName(props.route.state);
        return {
          tabBarVisible: routeName !== USER_INFO,
        };
      }}
    >
      <Tab.Screen name={HOME} component={HomeWithDrawer} />
      <Tab.Screen name={ADJUSTMENTLIST} component={AdhustmentlistDrawer} />
    </Tab.Navigator>
  );
}

function TabWithModalRoutes() {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{ cardStyle }}
    >
      <Stack.Screen name={HOME} component={TabRoutes} />
      <Stack.Screen name={INPUT} component={Input} />
      <Stack.Screen name={INPUT_PLANS} component={InputPlans} />
      <Stack.Screen name={INPUT_WORKTIME} component={InputWorkTime} />
    </ModalStack.Navigator>
  );
}

function ChooseLoginNavigator() {
  return (
    <ChooseLoginStack.Navigator
      initialRouteName={CHOOSE_LOGIN}
      screenOptions={{ cardStyle, headerStyle, headerTintColor }}
    >
      <ChooseLoginStack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} />
      <ChooseLoginStack.Screen name={SIGN_IN} component={SignIn} />
      <ChooseLoginStack.Screen name={SIGN_UP} component={SignUp} />
    </ChooseLoginStack.Navigator>
  );
}

function switchingAuthStatus(status: UiContext.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return (
        <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLoginNavigator} />
      );
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={TabWithModalRoutes} />;
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
