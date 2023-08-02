import { Center, FlatList, Heading, VStack } from "native-base";
import { Products } from "../temp/products";
import { CardProduct } from "../components/CardProduct";
import { Header } from "../components/Header";

export function Favorites() {
  return (
    <VStack flex={1} px={7} bg="white">
      <Header title="Favoritos"/>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={Products}
        keyExtractor={({ id }) => id.toString()}
        numColumns={2}
        renderItem={({ item }) => <CardProduct product={item} />}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          pb: 10,
        }}
      />
    </VStack>
  );
}
