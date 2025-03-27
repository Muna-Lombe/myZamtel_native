import type React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../styles/colors"

interface TabButtonProps {
  children: React.ReactNode
  active?: boolean
  onPress?: () => void
}

const TabButton: React.FC<TabButtonProps> = ({ children, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.activeContainer : styles.inactiveContainer]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, active ? styles.activeText : styles.inactiveText]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activeContainer: {
    backgroundColor: colors.emerald[500],
  },
  inactiveContainer: {
    backgroundColor: colors.gray[100],
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  activeText: {
    color: colors.white,
  },
  inactiveText: {
    color: colors.gray[700],
  },
})

export default TabButton

