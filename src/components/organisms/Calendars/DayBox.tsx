import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { width } from "../../../lib/window";
import { COLOR, FONTSIZE } from "../../../constants/theme";

type Props = {
  day: number;
};

export const DayBox = (props: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.dayText}>{props.day}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: width / 7,
    height: width / 7,
  },
  dayText: {
    textAlign: "center",
    fontSize: FONTSIZE.CAPTION,
    fontWeight: "600",
    color: COLOR.WHITE,
  },
});
