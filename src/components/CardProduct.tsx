import { Center, Heading, Image, Text, VStack, Pressable } from "native-base";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ProductDTO } from "../dtos/ProductDto";

type CardProductProps = TouchableOpacityProps & {
  product: ProductDTO;
};

export function CardProduct({ product, ...rest }: CardProductProps) {
  return (
    <TouchableOpacity {...rest} style={{ width: "47%", marginBottom: 20 }}>
      <VStack>
        <Center bg="gray.400" p={2} rounded={5}>
          <Image
            source={{ uri: product.image }}
            alt="imagem do produto"
            size={100}
          />
        </Center>
        <Text color="gray.500">{product.category.name}</Text>
        <Heading color="gray.700" fontSize={16}>
          {product.category.name}
        </Heading>
        <Text color="gray.700" fontFamily="heading" mt={2}>
          {product.price}
        </Text>
      </VStack>
    </TouchableOpacity>
  );
}
