import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Logo, Button } from "../atoms";
import { COLOR, FONTSIZE } from "../../constants/theme";
import { width } from "../../lib/window";

const padding = 20;
const edgeNumber = 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding,
    backgroundColor: COLOR.MAIN,
  },
  text: {
    fontSize: FONTSIZE.SUBTITLE,
    fontWeight: "800",
    lineHeight: 40,
    color: COLOR.WHITE,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: width - padding * edgeNumber,
    paddingVertical: 10,
  },
  imageContainer: {
    flex: 2,
  },
  contentContainer: {
    flex: 3,
    paddingTop: 30,
    marginTop: 30,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

type Props = {
  item: { text: string };
  onPress: () => void;
};

export const CarouselItem = ({ onPress, item }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.imageContainer}>
          <Logo />
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <Button
            onPress={onPress}
            label="次へ"
            color={COLOR.SECONDARY_LIGHT}
          />
        </View>
      </View>
    </View>
  );
};
