import { Center, Text, Image, FlatList } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type Categories = {
  name: string;
  image: string;
};

type Props = TouchableOpacityProps & {
  item: Categories;
};

export function CardCategories({ item, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Center mr={6}>
        <Center rounded="full" borderWidth={2} p={3} borderColor="gray.400">
          <Image
            source={{
              uri: item.image,
            }}
            size={9}
            alt="Categoria Camisetas"
            borderWidth={1}
          />
        </Center>
        <Text color="gray.700" fontFamily="body" mt={1} fontSize={12}>
          {item.name}
        </Text>
      </Center>
    </TouchableOpacity>
  );
}
