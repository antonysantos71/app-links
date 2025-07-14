import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styeles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Adicionar Link</Text>
      </View>
      <Text style={styles.label}>Cole o link aqui</Text>
    </View>
  )
}