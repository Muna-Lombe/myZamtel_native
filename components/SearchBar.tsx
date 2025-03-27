import type React from "react"
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { Search, X } from "react-native-feather"
import { colors } from "../styles/colors"

interface SearchBarProps {
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  onClear?: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", value, onChangeText, onClear }) => {
  return (
    <View style={styles.container}>
      <Search style={styles.searchIcon} width={16} height={16} stroke={colors.gray[400]} />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.gray[400]}
        value={value}
        onChangeText={onChangeText}
      />

      {value ? (
        <TouchableOpacity style={styles.clearButton} onPress={onClear}>
          <X width={16} height={16} stroke={colors.gray[400]} />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray[100],
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.gray[800],
    height: "100%",
  },
  clearButton: {
    padding: 4,
  },
})

export default SearchBar

