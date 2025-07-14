import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}