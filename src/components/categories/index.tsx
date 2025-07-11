import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

export function Categories() {
  return (
    <FlatList //componente proprio pra listar
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Category name={item.name} icon={item.icon} isSelected={false}/>}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  )
}