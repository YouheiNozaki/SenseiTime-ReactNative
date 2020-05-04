import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthWithRoutes as MainRoutes } from "./Main";

export const LoggingRoutes = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};
