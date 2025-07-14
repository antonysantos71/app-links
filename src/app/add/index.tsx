import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styeles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Add() {
  const [name, setName] = useState<string>();
  const [url, setUrl] = useState<string>();
  const [category, setCategory] = useState<string>("");
  const handleAddLink = () => {
    if(!category) {
      return Alert.alert("Categoria", "Selecione uma categoria");
    }
    if(!name?.trim()) {
      return Alert.alert("Nome", "Informe um nome");
    }
    if(!url?.trim()) {
      return Alert.alert("URL", "Informe uma URL");
    }
    console.log("Link added:", { category, name, url });
    setName('');
    setUrl('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Cole o link aqui</Text>
      <Categories onSelect={setCategory} selected={category} />
      <View style={styles.form}>
        <Input placeholder="Nome do link" onChangeText={setName} />
        {/*ja entende que é pra colocar o valor do input na função */}
        <Input placeholder="URL do link" onChangeText={setUrl} />
        <Button title="Adicionar Link" onPress={handleAddLink} />
      </View>
    </View>
  );
}
