import { Badge, Box, Text } from "native-base";
import React from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      bounces
      style={{ backgroundColor: "#f2f2f2", marginTop: 10 }}
    >
      <Box>
        <TouchableOpacity key={1}>
          <Badge style={[styles.center, { margin: 5 }]}>
            <Text paddingBottom="4" color="white">
              name
            </Text>
          </Badge>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Categories;
