import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello there</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 80,
    marginBottom: 10,

    height: 60,
  },
});

export default Header;
