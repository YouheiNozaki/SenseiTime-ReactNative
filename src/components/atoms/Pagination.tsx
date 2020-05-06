import React from "react";
import { StyleSheet } from "react-native";
import { Pagination as SCPagination } from "react-native-snap-carousel";
import { COLOR } from "../../constants/theme";

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: COLOR.CAROUSEL_BACKGROUND,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: COLOR.WHITE,
  },
});

interface Props {
  length: number;
  index: number;
}

export const Pagination = (prop: Props) => {
  const { length, index } = prop;
  return (
    <SCPagination
      dotsLength={length}
      activeDotIndex={index}
      containerStyle={styles.pagination}
      dotStyle={styles.dot}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};
