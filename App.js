import { NativeBaseProvider, extendTheme } from "native-base";
import Container from "./Container";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  const fontConfig = {
    Poppins: {
      600: {
        normal: "Poppins_600SemiBold",
      },
      500: {
        normal: "Poppins_500Medium",
      },
      400: {
        normal: "Poppins_400Regular",
      },
    },
  };

  const colorConfig = {
    primary: {
      50: "#ffff",
      100: "#ECECEC",
    },
    secondary: {
      50: "#fdf2f8",
      300: "#f9a8d4",
      400: "##f472b6",
      500: "##ec4899",
      900: "#000",
    },
    danger: {
      200: "#FFA0A0",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      800: "#9f1239",
    },
    error: {
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
    },
  };

  const theme = extendTheme({
    colors: colorConfig,
    fontConfig,
    fonts: {
      header: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Container />
    </NativeBaseProvider>
  );
}
