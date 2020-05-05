import React, { useContext } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useControlledComponent } from "../../../lib/hooks";
import { Button, dismiss, TextField } from "../../atoms";
import { SignInWithGoogle } from "./SignInWithGoogle";
import { Context, Status } from "../../../contexts/ui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  text: {
    marginVertical: 20,
  },
  button: {
    marginBottom: 50,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
});

export const SignIn = () => {
  const { setApplicationState } = useContext(Context);
  const mailAddress = useControlledComponent("");
  const password = useControlledComponent("");
  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextField
            label="email"
            value={mailAddress.value}
            onChangeText={mailAddress.onChangeText}
            style={styles.text}
            autoCompleteType="email"
          />
          <TextField
            label="password"
            value={password.value}
            onChangeText={password.onChangeText}
            style={styles.text}
            autoCompleteType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => setApplicationState(Status.AUTHORIZED)}
            label="ログイン"
            style={styles.button}
          />
          <SignInWithGoogle />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
