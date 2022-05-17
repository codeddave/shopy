import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

type Props = {
  icon?: string;
  width?: string;
  otherProps: any;
  onBlur: () => void;
  onChangeText: (text: string) => void;
  value: any;
};
const CustomTextInput: FC<Props> = ({
  width = "100%",
  icon,
  onBlur,
  onChangeText,
  value,
  ...otherProps
}) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, { width }]}>
        {icon ? (
          <MaterialCommunityIcons
            name={icon as any}
            size={20}
            // color={colors.mediumGrey}
            style={styles.icon}
          />
        ) : null}
        <TextInput
          //  placeholderTextColor={colors.mediumGrey}
          style={[styles.textInput]}
          {...otherProps}
        />
      </View>
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
