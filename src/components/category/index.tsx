import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, PressableProps } from "react-native"; // tipagens do react native
import { styles } from "./styles";

interface Categories extends PressableProps {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  isSelected: boolean;
}

export function Category({ name, icon, isSelected, ...props }: Categories) {
  const color = isSelected ? colors.green[300] : colors.gray[400]
  return (
    <Pressable style={styles.container} {...props}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, {color}]}>{name}</Text> // qnd quiser usar mais de um estilo
    </Pressable>
  );
}
