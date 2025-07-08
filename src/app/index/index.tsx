import { Image, TouchableOpacity, View } from "react-native"; //componentes do proprio react-native
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { FlatList } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories />

      <FlatList
        data={["1", "2", "3", "4", "5", "6", "7", "8"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Rocketseat"
            url="https://rocketseat.com.br"
            onDetails={() => {}}
            
          />
        )}
        style={styles.links}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.linkContent}
      />
    </View>
  );
}
