import { useCallback, useEffect, useState } from "react";
import {
  HStack,
  VStack,
  Input as NativeBaseInput,
  Icon,
  FlatList,
  Heading,
  Text,
  Toast,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Header } from "../components/Header";
import { CardCategories, Categories } from "../components/CardCatgegories";
import { Products } from "../temp/products";
import { CardProduct } from "../components/CardProduct";
import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { Loading } from "../components/Loading";
import { ProductDTO } from "../dtos/ProductDto";

type ProductsProps = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
};

export function Home() {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [products, setProducts] = useState<ProductsProps[]>();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    loadHome();
  }, []);

  async function loadHome() {
    try {
      setLoading(true);
      await loadCategories();
      await loadProducts();
    } catch (error) {
      Toast.show({
        title: 'Erro Interno de Servidor',
        placement: 'top',
        bgColor: "red.500"
      })
    }finally{
      setLoading(false);
    }
  }

  async function loadCategories() {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      throw error;
    }
  }

  async function loadProducts() {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      throw error;
    }
  }

  function handleOpenProduct() {
    navigation.navigate("ProductDetail");
  }

  return (
    <VStack flex={1} px={7} bg="white">
      <Header title="Início" />

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

      {loading ? (
        <Loading />
      ) : (
        <>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <CardCategories item={item} />}
            showsHorizontalScrollIndicator={false}
            horizontal
            mt={4}
            my={2}
            maxH={24}
            minH={10}
          />

          <VStack flex={1}>
            <HStack alignItems="center" mb={5}>
              <Heading
                color="gray.700"
                flex={1}
                fontSize={18}
                fontFamily="heading"
              >
                Recomendados
              </Heading>

              <TouchableOpacity>
                <Text color="green.500">Ver mais</Text>
              </TouchableOpacity>
            </HStack>

            <FlatList
              columnWrapperStyle={{ justifyContent: "space-between" }}
              data={products}
              keyExtractor={( item ) => item.id.toString()}
              numColumns={2}
              renderItem={( {item} ) => (
                <CardProduct product={item as any} onPress={handleOpenProduct} />
              )}
              showsVerticalScrollIndicator={false}
              _contentContainerStyle={{
                pb: 10,
              }}
            />
          </VStack>
        </>
      )}
    </VStack>
  );
}
