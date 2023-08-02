import { VStack } from "native-base";
import { Header } from "../components/Header";
import { ProductDTO } from "../dtos/ProductDto";

type ProductDetailProps = {
  product?: ProductDTO;
};

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <VStack flex={1} px={7} bg="white">
      <Header title={product?.name || "teste"} />
    </VStack>
  );
}
