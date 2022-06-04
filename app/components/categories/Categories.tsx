import { Badge, Box, HStack, Text } from "native-base";
import React from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

type Props = {
  categories: any[];
  categoryFilter: (filter: string) => void;
  productCategories: any[];
  active: number | undefined;
  setActive: any;
};
const Categories = ({
  setActive,
  categoryFilter,
  active,
  categories,
}: Props) => {
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
      <HStack paddingY="2">
        <TouchableOpacity
          onPress={() => {
            categoryFilter("all");
          }}
          key={1}
        >
          <Badge
            rounded="lg"
            style={[
              styles.center,
              { margin: 5 },
              active == -1 ? styles.active : styles.inactive,
            ]}
          >
            <Text color="white">All</Text>
          </Badge>
        </TouchableOpacity>
        {categories?.map((category) => (
          <TouchableOpacity
            onPress={() => {
              categoryFilter(category._id.$oid);
              setActive(categories.indexOf(category));
            }}
            key={category._id.$oid}
          >
            <Badge
              rounded="lg"
              style={[
                styles.center,
                { margin: 5 },
                active == categories.indexOf(category)
                  ? styles.active
                  : styles.inactive,
              ]}
            >
              <Text color="white">{category.name}</Text>
            </Badge>
          </TouchableOpacity>
        ))}
      </HStack>
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
