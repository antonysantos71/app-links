import { Stack } from "expo-router"; // metodo de navegação tipo "pilha"
import { colors } from "@/styles/colors";
export default function Layout() { // configurações da layout do app
  const backgroundColor = colors.gray[950];
  return (
    <Stack
      screenOptions={{
        headerShown: false, // desativar content title
        contentStyle: {
          backgroundColor, // short sitaxe - varieval é msm nome da propriedade ex. {backgroundColor: backgroundColor} -> {backgroundColor}
        },
      }}
    />
  );
}
