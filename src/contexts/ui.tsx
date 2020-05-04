import { createContext } from "react";

export enum Status {
  LOADING = "loading",
  FIRST_OPEN = "firstOpen",
  UN_AUTHORIZED = "unAuthorized",
  AUTHORIZED = "authorized",
}

export function createApplicationInitialState(): Status {
  return Status.LOADING;
}

export const Context = createContext({
  applicationState: createApplicationInitialState(),
  setApplicationState: (_: Status) => {},
});
