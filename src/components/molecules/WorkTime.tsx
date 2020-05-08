import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLOR, FONTSIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: COLOR.MAIN,
    height: 120,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  dayText: {
    fontSize: FONTSIZE.CAPTION,
    color: COLOR.WHITE,
    margin: 4,
  },
  workTimeText: {
    fontSize: FONTSIZE.TITLE,
    color: COLOR.WHITE,
  },
  overTimeText: {
    fontSize: FONTSIZE.DISPLAY,
    color: COLOR.WHITE,
  },
});

interface Props {
  day: Date;
  workTime: string | undefined;
  overTime: string | undefined;
  onPress: () => void;
}

export const WorkTimeDisplay = (props: Props) => {
  const { day, workTime, overTime, onPress } = props;
  return (
    <TouchableHighlight style={styles.contentContainer} onPress={onPress}>
      <View>
        <Text style={styles.dayText}>{day}</Text>
        {!!workTime && <Text style={styles.workTimeText}>{workTime}</Text>}
      </View>
      {!!overTime && <Text style={styles.overTimeText}>残業 {overTime}</Text>}
      <Icon name="angle-right" size={32} color={COLOR.WHITE} />
    </TouchableHighlight>
  );
};
