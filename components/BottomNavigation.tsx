import type React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Home, DollarSign, Grid, ShoppingBag, HelpCircle } from "react-native-feather"
import { colors } from "../styles/colors"

interface BottomNavigationProps {
  activeScreen: "Home" | "Money" | "Services" | "Shop" | "Help"
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeScreen }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
        <View style={[styles.iconContainer, activeScreen === "Home" && styles.activeIconContainer]}>
          <Home stroke={activeScreen === "Home" ? colors.white : colors.gray[500]} width={20} height={20} />
        </View>
        <Text style={[styles.label, activeScreen === "Home" && styles.activeLabel]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Dashboard")}>
        <View style={[styles.iconContainer, activeScreen === "Money" && styles.activeIconContainer]}>
          <DollarSign stroke={activeScreen === "Money" ? colors.white : colors.gray[500]} width={20} height={20} />
        </View>
        <Text style={[styles.label, activeScreen === "Money" && styles.activeLabel]}>Money</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Services")}>
        <View style={[styles.iconContainer, activeScreen === "Services" && styles.activeIconContainer]}>
          <Grid stroke={activeScreen === "Services" ? colors.white : colors.gray[500]} width={20} height={20} />
        </View>
        <Text style={[styles.label, activeScreen === "Services" && styles.activeLabel]}>Services</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Shop")}>
        <View style={[styles.iconContainer, activeScreen === "Shop" && styles.activeIconContainer]}>
          <ShoppingBag stroke={activeScreen === "Shop" ? colors.white : colors.gray[500]} width={20} height={20} />
        </View>
        <Text style={[styles.label, activeScreen === "Shop" && styles.activeLabel]}>Shop</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Help")}>
        <View style={[styles.iconContainer, activeScreen === "Help" && styles.activeIconContainer]}>
          <HelpCircle stroke={activeScreen === "Help" ? colors.white : colors.gray[500]} width={20} height={20} />
        </View>
        <Text style={[styles.label, activeScreen === "Help" && styles.activeLabel]}>Help</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  navItem: {
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: colors.gray[100],
    borderRadius: 20,
    padding: 4,
  },
  activeIconContainer: {
    backgroundColor: colors.emerald[500],
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    color: colors.gray[500],
  },
  activeLabel: {
    color: colors.emerald[500],
    fontWeight: "500",
  },
})

export default BottomNavigation

