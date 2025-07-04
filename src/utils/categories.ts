import { MaterialIcons } from "@expo/vector-icons";

interface Category {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  { id: "1", name: "Projeto", icon: "code" },
  { id: "2", name: "Tecnologia", icon: "computer" },
  { id: "3", name: "Educação", icon: "school" },
  { id: "4", name: "Saúde", icon: "local-hospital" },
  { id: "5", name: "Esportes", icon: "sports-soccer" },
  { id: "6", name: "Finanças", icon: "attach-money" },
  { id: "7", name: "Viagens", icon: "flight" },
  { id: "8", name: "Música", icon: "music-note" },
  { id: "9", name: "Filmes", icon: "movie" },
  { id: "10", name: "Livros", icon: "menu-book" }
]
