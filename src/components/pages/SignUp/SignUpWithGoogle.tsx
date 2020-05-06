import React, { useContext } from "react";
import { Button } from "../../atoms/Button";
import { Context, Status } from "../../../contexts/ui";

export const SignUpWithGoogle = () => {
  const { setApplicationState } = useContext(Context);
  return (
    <Button
      onPress={() => setApplicationState(Status.AUTHORIZED)}
      icon="google"
      label="Googleアカウントで登録"
    />
  );
};
