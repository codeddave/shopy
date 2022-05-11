import { ScrollView, Box, Image } from "native-base";
import React from "react";

type Props = {
  route: any;
  item: any;
};

const ProductDetailScreen = ({ route }: Props) => {
  // const [item, setItem] = useState(route.params.product);
  const product = route.params.item;

  return (
    <ScrollView>
      <Box>
        <Image
          source={{
            uri: product.image
              ? product.image
              : `https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png`,
          }}
          height={200}
          width={400}
          resizeMode="contain"
          marginTop={10}
        />

        <Box></Box>
      </Box>
    </ScrollView>
  );
};

export default ProductDetailScreen;
