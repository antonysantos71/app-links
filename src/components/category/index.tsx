import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, PressableProps } from "react-native"; // tipagens do react native
import { styles } from "./styles";

interface Categories extends PressableProps {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function Category({ name, icon, ...props }: Categories) {
  return (
    <Pressable style={styles.container} {...props}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}
