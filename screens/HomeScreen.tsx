"use client"

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from "react-native"
import { User, Bell, ChevronDown, Zap, CreditCard, Gift, BarChart2, ShoppingBag, Phone } from "react-native-feather"
import { SafeAreaView } from "react-native-safe-area-context"

import BottomNavigation from "../components/BottomNavigation"
import SearchBar from "../components/SearchBar"
import ServiceCard from "../components/ServiceCard"
import StatusBadge from "../components/StatusBadge"
import { colors } from "../styles/colors"

interface HomeScreenProps {
  navigation: any
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showNotification, setShowNotification] = useState(true)

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar backgroundColor={colors.emerald[500]} barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Profile")}>
            <User width={24} height={24} stroke={colors.white} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Mobile Money</Text>

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Notifications")}>
            <Bell width={24} height={24} stroke={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Location Bar */}
      <View style={styles.locationBar}>
        <View style={styles.locationContent}>
          <Text style={styles.locationLabel}>You are in</Text>
          <TouchableOpacity style={styles.locationSelector}>
            <Text style={styles.locationText}>Lusaka</Text>
            <ChevronDown width={16} height={16} stroke={colors.gray[500]} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.changeLocationText}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search for services..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onClear={() => setSearchQuery("")}
          />
        </View>

        {/* Notification */}
        {showNotification && (
          <View style={styles.notificationCard}>
            <TouchableOpacity style={styles.notificationCloseButton} onPress={() => setShowNotification(false)}>
              <ChevronDown width={16} height={16} stroke={colors.gray[500]} />
            </TouchableOpacity>

            <View style={styles.notificationContent}>
              <View style={styles.notificationIconContainer}>
                <Bell width={20} height={20} stroke={colors.amber[600]} />
              </View>

              <View style={styles.notificationTextContainer}>
                <Text style={styles.notificationTitle}>Verify your account</Text>
                <Text style={styles.notificationMessage}>Please confirm your personal data to access all features</Text>
              </View>
            </View>
          </View>
        )}

        {/* User Info */}
        <View style={styles.userInfoCard}>
          <View style={styles.userInfoLeft}>
            <View style={styles.userAvatarContainer}>
              <View style={styles.userAvatar}>
                <Text style={styles.userInitial}>L</Text>
              </View>
            </View>

            <View>
              <Text style={styles.userName}>Lombe</Text>
              <View style={styles.userPhoneContainer}>
                <Text style={styles.userPhone}>260952768272</Text>
                <ChevronDown width={16} height={16} stroke={colors.gray[600]} />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.mobileMoneyButton} onPress={() => navigation.navigate("Dashboard")}>
            <Text style={styles.mobileMoneyButtonText}>Mobile Money</Text>
          </TouchableOpacity>
        </View>

        {/* Balance Info */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceCard}>
            <View style={styles.balanceIconContainer}>
              <CreditCard width={20} height={20} stroke={colors.emerald[600]} />
            </View>

            <View>
              <Text style={styles.balanceAmount}>ZMW 0.01</Text>
              <Text style={styles.balanceLabel}>Main Balance</Text>
            </View>
          </View>

          <View style={styles.balanceCard}>
            <View style={styles.balanceIconContainer}>
              <Phone width={20} height={20} stroke={colors.emerald[600]} />
            </View>

            <View>
              <Text style={styles.balanceAmount}>0 Mins</Text>
              <Text style={styles.balanceLabel}>Voice Balance</Text>
            </View>
          </View>
        </View>

        {/* Services */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Services</Text>

          <View style={styles.servicesGrid}>
            <ServiceCard
              icon={<Zap width={24} height={24} stroke={colors.emerald[500]} />}
              label="Pay Bills"
              onPress={() => navigation.navigate("MakePayment")}
            />
            <ServiceCard
              icon={<CreditCard width={24} height={24} stroke={colors.emerald[500]} />}
              label="Mobile Money"
              onPress={() => navigation.navigate("Dashboard")}
            />
            <ServiceCard
              icon={<Gift width={24} height={24} stroke={colors.emerald[500]} />}
              label="Offers"
              onPress={() => navigation.navigate("Offers")}
            />
            <ServiceCard icon={<BarChart2 width={24} height={24} stroke={colors.emerald[500]} />} label="My Usage" />
            <ServiceCard
              icon={<ShoppingBag width={24} height={24} stroke={colors.emerald[500]} />}
              label="Shop"
              onPress={() => navigation.navigate("Shop")}
            />
            <ServiceCard
              icon={<Phone width={24} height={24} stroke={colors.emerald[500]} />}
              label="Support"
              onPress={() => navigation.navigate("Support")}
            />
          </View>
        </View>

        {/* Recharge Offers */}
        <View style={styles.offersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recharge Offers</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.offersGrid}>
            {/* Women's day offer */}
            <View style={[styles.offerCard, { backgroundColor: colors.purple[600] }]}>
              <View style={styles.offerHeader}>
                <Text style={styles.offerType}>Women's day offer</Text>
                <StatusBadge variant="warning">Special</StatusBadge>
              </View>
              <Text style={styles.offerPrice}>K49</Text>
              <Text style={styles.offerDetails}>10GB, 120Mins</Text>
              <Text style={styles.offerValidity}>Valid for 30 Days</Text>
            </View>

            {/* K2 */}
            <View style={[styles.offerCard, { backgroundColor: colors.purple[600] }]}>
              <View style={styles.offerHeader}>
                <Text style={styles.offerType}>Daily Bundle</Text>
                <StatusBadge variant="info">Popular</StatusBadge>
              </View>
              <Text style={styles.offerPrice}>K2</Text>
              <Text style={styles.offerDetails}>7Mins, 50SMS</Text>
              <Text style={styles.offerValidity}>Valid for 24 Hrs</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activeScreen="Home" navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  header: {
    backgroundColor: colors.emerald[500],
    paddingBottom: 24,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
  iconButton: {
    padding: 8,
  },
  locationBar: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: -16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  locationContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationLabel: {
    fontSize: 14,
    color: colors.gray[600],
    marginRight: 8,
  },
  locationSelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 4,
  },
  changeLocationText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.emerald[500],
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 16,
  },
  notificationCard: {
    backgroundColor: colors.amber[50],
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  notificationCloseButton: {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 4,
  },
  notificationContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  notificationIconContainer: {
    backgroundColor: colors.amber[100],
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
    marginTop: 4,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.gray[800],
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: colors.gray[600],
  },
  userInfoCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  userInfoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatarContainer: {
    backgroundColor: colors.emerald[100],
    borderRadius: 24,
    padding: 12,
    marginRight: 12,
  },
  userAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.emerald[500],
    alignItems: "center",
    justifyContent: "center",
  },
  userInitial: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
  },
  userName: {
    color: colors.emerald[600],
    fontSize: 15,
    fontWeight: "500",
  },
  userPhoneContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhone: {
    color: colors.gray[600],
    fontSize: 14,
    marginRight: 4,
  },
  mobileMoneyButton: {
    backgroundColor: colors.emerald[500],
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  mobileMoneyButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
  },
  balanceContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 24,
  },
  balanceCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  balanceIconContainer: {
    backgroundColor: colors.emerald[100],
    borderRadius: 20,
    padding: 12,
    marginRight: 12,
  },
  balanceAmount: {
    color: colors.emerald[600],
    fontSize: 15,
    fontWeight: "500",
  },
  balanceLabel: {
    color: colors.gray[600],
    fontSize: 13,
  },
  servicesSection: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.gray[800],
    marginBottom: 16,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  offersSection: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.emerald[500],
  },
  offersGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  offerCard: {
    borderRadius: 12,
    padding: 12,
    width: "48%",
  },
  offerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  offerType: {
    fontSize: 12,
    color: colors.white,
    opacity: 0.8,
  },
  offerPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 4,
  },
  offerDetails: {
    fontSize: 14,
    color: colors.white,
    marginBottom: 4,
  },
  offerValidity: {
    fontSize: 12,
    color: colors.white,
    opacity: 0.8,
  },
})

export default HomeScreen

