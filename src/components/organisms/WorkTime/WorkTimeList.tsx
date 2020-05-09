import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import * as WorkTime from "./WorkTime";
import { COLOR } from "../../../constants/theme";

export { WorkTime };
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  separator: {
    height: 1,
    backgroundColor: COLOR.SECONDARY,
  },
});

export type State = Array<WorkTime.State>;
interface EditableProps {
  isEditable: true;
  workTime: State;
  actions: WorkTime.EditableActions;
}
interface ReadonlyProps {
  isEditable: false;
  workTime: State;
  header: React.ReactElement;
  actions: WorkTime.ReadonlyActions;
}

type Props = EditableProps | ReadonlyProps;

export const WorkTimes = (props: Props) => {
  if (props.isEditable) {
    return (
      <FlatList
        style={styles.container}
        data={props.workTime}
        renderItem={({ item }) => (
          <WorkTime.Component
            isEditable={props.isEditable}
            state={item}
            actions={props.actions}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
  return (
    <FlatList
      style={styles.container}
      data={props.workTime}
      renderItem={({ item }) => (
        <WorkTime.Component
          isEditable={props.isEditable}
          state={item}
          actions={props.actions}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={props.header}
    />
  );
};
