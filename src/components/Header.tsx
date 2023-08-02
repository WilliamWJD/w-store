import { Center, HStack, Heading, VStack } from "native-base";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <HStack h={100} w="full" pt={10} pb={15} px={7}>
      <Center flex={1}>
        <Heading color="green.500">{title}</Heading>
      </Center>
    </HStack>
  );
}
