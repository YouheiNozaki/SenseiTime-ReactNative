import React, { useRef, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { SwipeRow } from "react-native-swipe-list-view";
import { COLOR } from "../../../constants/theme";
import * as DeleteButton from "./DeleteButton";
import { WorkTimeDisplay } from "../../molecules/WorkTime";

export interface State {
  id: string;
  day: Date;
  workTime?: string;
  overTime?: string;
}

export { DeleteButton };
export interface GotoDetail {
  (state: State, isEditable: boolean): void;
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: COLOR.MAIN,
    height: 120,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export interface EditableActions {
  removeWorkTime: DeleteButton.RemoveWorkTime;
  gotoDetail: GotoDetail;
}

interface EditableProps {
  isEditable: true;
  state: State;
  actions: EditableActions;
}

const EditableRow = (props: EditableProps) => {
  const {
    state,
    isEditable,
    actions: { gotoDetail, removeWorkTime },
  } = props;

  const rowRef = useRef<SwipeRow<View>>(null);

  const closeRow = useCallback(() => {
    rowRef?.current?.closeRow();
  }, [rowRef]);

  const removeActions = useMemo(() => {
    return {
      removeWorkTime,
      closeRow,
    };
  }, [closeRow, removeWorkTime]);

  const onPress = useCallback(() => {
    gotoDetail(state, isEditable);
  }, [state, isEditable, gotoDetail]);

  return (
    <SwipeRow disableRightSwipe={!isEditable} rightOpenValue={80} ref={rowRef}>
      <View style={styles.contentContainer}>
        <DeleteButton.Component state={state} actions={removeActions} />
      </View>
      <WorkTimeDisplay
        onPress={onPress}
        day={state.day}
        workTime={state.workTime}
        overTime={state.overTime}
      />
    </SwipeRow>
  );
};

export interface ReadonlyActions {
  gotoDetail: GotoDetail;
}
interface ReadonlyProps {
  isEditable: false;
  state: State;
  actions: ReadonlyActions;
}

const ReadonlyRow = (props: ReadonlyProps) => {
  const {
    isEditable,
    state,
    actions: { gotoDetail },
  } = props;
  const onPress = useCallback(() => {
    gotoDetail(state, isEditable);
  }, [state, isEditable, gotoDetail]);

  return (
    <WorkTimeDisplay
      onPress={onPress}
      day={state.day}
      workTime={state.workTime}
      overTime={state.overTime}
    />
  );
};

type Props = EditableProps | ReadonlyProps;

export const Component = (props: Props) => {
  if (props.isEditable) {
    return <EditableRow {...props} />;
  }
  return <ReadonlyRow {...props} />;
};
