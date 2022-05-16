import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { FC } from "react";

type Props = {
  icon?: string;
  width?: string;
  otherProps: any;
};
const CustomTextInput: FC<Props> = ({
  width = "100%",
  icon,
  ...otherProps
}) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, { width }]}></View>
    </SafeAreaView>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    //  backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    //  ...defaultStyles.text,
    width: "100%",
    // color: colors.mediumGrey,
  },
});
