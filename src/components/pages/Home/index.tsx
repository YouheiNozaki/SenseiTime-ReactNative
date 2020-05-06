import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { DETAIL, INPUT } from "../../../constants/path";
import { COLOR, FONTSIZE } from "../../../constants/theme";
import { width } from "../../../lib/window";

LocaleConfig.locales.jp = {
  monthNames: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  monthNamesShort: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  dayNames: ["日", "月", "火", "水", "木", "金", "土"],
  dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
};
LocaleConfig.defaultLocale = "jp";

export const Home = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Calendar
        monthFormat={"yyyy年 M月"}
        theme={{
          todayTextColor: COLOR.MAIN,
        }}
        dayComponent={({ date, state }) => {
          return (
            <View style={styles.itemContainer}>
              <TouchableOpacity onPress={() => navigate(DETAIL)}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: FONTSIZE.CAPTION,
                    fontWeight: "600",
                    color: state === "disabled" ? COLOR.GRAY_LIGHT : COLOR.GRAY,
                  }}
                >
                  {date.day}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  itemContainer: {
    width: width / 7,
    height: width / 7,
  },
});
