import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

interface CategoriesProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function Categories({ selected, onSelect }: CategoriesProps) {
  return (
    <FlatList //componente proprio pra listar
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category 
        name={item.name} 
        icon={item.icon} 
        isSelected={item.name === selected} 
        onPress={() => onSelect(item.name)} />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  );
}
