import { Badge, Box, Text } from "native-base";
import React from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

type Props = {
  categories: any[];
  categoryFilter: any;
  productCategories: any;
  active: boolean;
  setActive: any;
};
const Categories = ({ setActive, categoryFilter, active }: Props) => {
  const handleBadgeClick = (filter: string) => {
    categoryFilter(filter);

    setActive(!active);
  };
  return (
    <ScrollView
      horizontal
      bounces
      style={{ backgroundColor: "#f2f2f2", marginTop: 10 }}
    >
      <Box>
        <TouchableOpacity
          onPress={() => {
            handleBadgeClick("all");
          }}
          key={1}
        >
          <Badge
            style={[
              styles.center,
              { margin: 5 },
              active ? styles.active : styles.inactive,
            ]}
          >
            <Text paddingBottom="4" color="white">
              All
            </Text>
          </Badge>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  active: {
    backgroundColor: "#03bafc",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  inactive: {
    backgroundColor: "#a0e1eb",
  },
});

export default Categories;
