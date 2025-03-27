import type React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { ArrowLeft } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { colors } from "../styles/colors"

interface HeaderProps {
  title: string
  showBackButton?: boolean
  rightComponent?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = true, rightComponent }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeft width={24} height={24} stroke={colors.white} />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.emerald[500],
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  leftContainer: {
    width: 40,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    flex: 1,
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  rightContainer: {
    width: 40,
    alignItems: "flex-end",
  },
})

export default Header

