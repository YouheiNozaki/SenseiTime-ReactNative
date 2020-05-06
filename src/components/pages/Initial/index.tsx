import React, { useCallback, useContext, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { CarouselStatic } from "react-native-snap-carousel";
import SafeAreaView from "react-native-safe-area-view";
import { Carousel } from "../../organisms";
import { Pagination } from "../../atoms";
import { COLOR } from "../../../constants/theme";
import { Context, Status } from "../../../contexts/ui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLOR.MAIN,
  },
  text: {
    color: COLOR.WHITE,
  },
});

interface Data {
  text: string;
}

const renderData = [
  {
    text:
      "SenseiTimeは予定を管理、日々の残業時間を簡単に把握できるアプリです。",
  },
  {
    text:
      "カレンダーの日付またはボタンをクリックして予定、勤務した時間を記録しましょう。",
  },
  {
    text: "予定、勤務した時間は簡単に編集・登録ができます",
  },
  {
    text:
      "登録した残業時間は調整時間一覧に記録されていきます。¥n各自治体のルールに基づいて、調整を活用しましょう",
  },
  {
    text:
      "調整時間の活用や働き方改革についてブログを読んで学びましょう。¥nご寄稿もお待ちしています。",
  },
];

export const Initial = () => {
  const [activeSlide, changeSlide] = useState(0);
  const { setApplicationState } = useContext(Context);

  const carouselRef = useRef(null);
  const onEnd = useCallback(() => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  const onNext = useCallback(() => {
    const nextIndex =
      activeSlide === renderData.length - 1 ? activeSlide : 1 + activeSlide;
    setTimeout(() => {
      if (!carouselRef || !carouselRef.current) {
        return;
      }
      const carousel = (carouselRef.current as any) as CarouselStatic<Data>;
      carousel.snapToItem(nextIndex);
    }, 250);
    changeSlide(nextIndex);
  }, [activeSlide]);
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={renderData}
        onEnd={onEnd}
        onNext={onNext}
        carouselRef={carouselRef}
        onSnapToItem={changeSlide}
      />
      <Pagination length={renderData.length} index={activeSlide} />
    </SafeAreaView>
  );
};
