import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

interface ILinkProps {
  name: string;
  url: string;
  onDetails?: () => void;
}

export function Link({ name, url, onDetails }: ILinkProps) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        {/* numberOfLines se for maior que a linha o resto fica "..." */}
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>{" "}
        <Text style={styles.url} numberOfLines={1}>
          {url}
        </Text>
      </View>

      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]}/>
      </TouchableOpacity>
    </View>
  );
}
