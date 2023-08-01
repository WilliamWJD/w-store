import { StatusBar } from "react-native";
import { NativeBaseProvider, Center, Heading } from "native-base";
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Center flex={1} bg="white">
          <Heading color="gray.700">Hello</Heading>
        </Center>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
}
