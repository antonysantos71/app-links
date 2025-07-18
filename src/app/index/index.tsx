import { Image, Text, Modal, TouchableOpacity, View } from "react-native"; //componentes do proprio react-native
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { FlatList } from "react-native";
import { Option } from "@/components/option";
import { router } from "expo-router";
import { useState } from "react";
import { categories } from "@/utils/categories";

export default function Index() {
  const [category, setCategory] = useState<string>(categories[0].name);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories selected={category} onSelect={setCategory} />

      <FlatList
        data={["1", "2", "3", "4", "5", "6", "7"]}
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

      <Modal visible={false} transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons name="close" size={24} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Rocktseat</Text>

            <Text style={styles.modalUrl}>https://rocketseat.com.br</Text>

            <View style={styles.modalFooter}> 
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language"/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
