import { useState } from "react";
import {
  HStack,
  VStack,
  Input as NativeBaseInput,
  Icon,
  FlatList,
  Heading,
  Text,
  Image,
  Center,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Header } from "../components/Header";
import { CardCategories, Categories } from "../components/CardCatgegories";
import { ListCategories } from "../temp/categories";
import { Products } from "../temp/products";

type ProductsProps = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
};

export function Home() {
  const [categories, setCategories] = useState<Categories[]>(ListCategories);
  const [products, setProducts] = useState<ProductsProps[]>(Products);

  return (
    <VStack flex={1} px={7} bg="white">
      <Header />

      <HStack bg="gray.200" px={3} py={2} alignItems="center" rounded={5}>
        <Icon as={MaterialIcons} name="search" size={6} color="gray.700" />
        <NativeBaseInput
          placeholder="Procure por um produto"
          flex={1}
          ml={2}
          size={2}
          borderWidth={0}
          _focus={{
            borderWidth: 0,
            bg: "gray.200",
          }}
        />
      </HStack>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CardCategories item={item} />}
        showsHorizontalScrollIndicator={false}
        // _contentContainerStyle={{ px: 8 }}
        horizontal
        mt={4}
        my={2}
        maxH={24}
        minH={10}
      />

      <VStack flex={1}>
        <HStack alignItems="center" mb={5}>
          <Heading color="gray.700" flex={1} fontSize={18} fontFamily="heading">
            Recomendados
          </Heading>

          <TouchableOpacity>
            <Text color="green">Ver mais</Text>
          </TouchableOpacity>
        </HStack>

        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={products}
          keyExtractor={({ id }) => id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <VStack w="47%" mb={5}>
              <Center bg="gray.400" p={2} rounded={5}>
                <Image
                  source={{ uri: item.image }}
                  alt="imagem do produto"
                  size={100}
                />
              </Center>
              <Text color="gray.500">{item.category}</Text>
              <Heading color="gray.700" fontSize={16}>{item.name}</Heading>
              <Text color="gray.700" fontFamily="heading" mt={2}>{item.price}</Text>
            </VStack>
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            pb: 10
          }}
        />
      </VStack>
    </VStack>
  );
}
