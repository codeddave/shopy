import React from "react";
import { SafeAreaView, StyleSheet, Image, Text, View } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../../../assets/cart.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 85,
    marginBottom: 30,
    height: 80,
  },
  logo: {
    width: 50,
    height: 60,
  },
});

export default Header;
