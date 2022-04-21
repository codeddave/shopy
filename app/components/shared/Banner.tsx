import { ScrollView, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState<string[]>([]);

  useEffect(() => {
    setBannerData([
      "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
      "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
      "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <ScrollView>
      <View style={styles.swiper}>
        <Swiper
          showsButtons={false}
          autoplay
          autoplayTimeout={2}
          style={{ height: width / 3 }}
        >
          {bannerData.map((item) => (
            <Image
              style={styles.imageBanner}
              key={item}
              resizeMode="cover"
              source={{ uri: item }}
            />
          ))}
        </Swiper>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 3,
    width: width,
  },
});
export default Banner;
