import React, { useState } from "react";
import * as UiContext from "./contexts/ui";
import { LoggingRoutes as Routes } from "./routes";

export const Index = () => {
  const [applicationState, setApplicationState] = useState(
    UiContext.createApplicationInitialState()
  );
  return (
    <UiContext.Context.Provider
      value={{ applicationState, setApplicationState }}
    >
      <Routes />
    </UiContext.Context.Provider>
  );
};
