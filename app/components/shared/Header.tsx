import React from "react";
import { SafeAreaView, StyleSheet, Image, Text } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../../../assets/cart.png")}
      />
      <Text style={{ textAlign: "center", fontStyle: "italic" }}>Shopy</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",

    marginTop: 110,
    marginBottom: 10,
    height: 120,
  },
  logo: {
    width: 45,
    height: 60,
  },
});

export default Header;
