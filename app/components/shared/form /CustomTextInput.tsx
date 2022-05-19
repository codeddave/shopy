import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

type Props = {
  icon?: string;
  width?: string;
  otherProps?: any;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
  value?: any;
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
            // color={colors.mediumGrey}d
            style={styles.icon}
          />
        ) : null}
        <TextInput
          placeholderTextColor="#adadaf"
          onBlur={onBlur}
          value={value}
          onChangeText={onChangeText}
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
    backgroundColor: "#ffffff",
    borderRadius: 25,
    flexDirection: "row",
    borderColor: "black",
    width: "100%",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 3,
    padding: 13,
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
