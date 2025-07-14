import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { colors } from "@/styles/colors";

interface OptionProps extends TouchableOpacityProps {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
}

export function Option({
  name,
  icon,
  variant = "primary",
  ...props
}: OptionProps) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primary" ? colors.green[300] : colors.gray[400]}
      />
      <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
