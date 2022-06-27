import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from "../../theme";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  danger?: boolean;
}

export function Button({ title, danger, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: danger ? theme.colors.red : theme.colors.button },
      ]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
