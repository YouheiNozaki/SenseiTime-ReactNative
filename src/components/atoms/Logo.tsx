import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  ImageStyle,
} from "react-native";
import { width } from "../../lib/window";
import SenseiTimeLogo from "../../../assets/senseitimeMain.png";

const edgeNumber = 2;
const ratio = 3;
const imageRatio = edgeNumber / ratio;

const styles = StyleSheet.create({
  image: {
    width: width * imageRatio,
    flex: 1,
    resizeMode: "contain",
  },
});

interface Props {
  image?: ImageSourcePropType;
  style?: ImageStyle | ImageStyle[];
}

export const Logo = (props: Props) => {
  const { image = SenseiTimeLogo, style } = props;
  return (
    <Image source={image} resizeMode="contain" style={[styles.image, style]} />
  );
};
