"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { ArrowLeft, ChevronRight, CreditCard, DollarSign } from "react-native-feather"
import { colors } from "../styles/colors"
import StatusBadge from "../components/StatusBadge"
import SearchBar from "../components/SearchBar"
import BottomNavigation from "../components/BottomNavigation"

interface InternationalMoneyTransferScreenProps {
  navigation: any
}

const InternationalMoneyTransferScreen = ({ navigation }: InternationalMoneyTransferScreenProps) => {
  const [activeTab, setActiveTab] = useState("popular")
  const [searchQuery, setSearchQuery] = useState("")

  const countries = [
    { id: "south-africa", name: "South Africa", flag: "🇿🇦", popular: true },
    { id: "zimbabwe", name: "Zimbabwe", flag: "🇿🇼", popular: true },
    { id: "tanzania", name: "Tanzania", flag: "🇹🇿", popular: true },
    { id: "kenya", name: "Kenya", flag: "🇰🇪", popular: true },
    { id: "uganda", name: "Uganda", flag: "🇺🇬", popular: false },
    { id: "malawi", name: "Malawi", flag: "🇲🇼", popular: false },
    { id: "botswana", name: "Botswana", flag: "🇧🇼", popular: false },
    { id: "namibia", name: "Namibia", flag: "🇳🇦", popular: false },
  ]

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === "all" || (activeTab === "popular" && country.popular)
    return matchesSearch && matchesTab
  })

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>10:26</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft width={24} height={24} stroke={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>International Money Transfer</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Exchange Rate Card */}
        <View style={styles.exchangeRateCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Today's Exchange Rate</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exchangeRateContent}>
            <View style={styles.exchangeRateLeft}>
              <View style={styles.currencyIconContainer}>
                <DollarSign width={20} height={20} stroke={colors.emerald[600]} />
              </View>
              <View>
                <Text style={styles.exchangeRateText}>1 USD = 20.35 ZMW</Text>
                <Text style={styles.exchangeRateText}>1 ZMW = 0.049 USD</Text>
              </View>
            </View>
            <StatusBadge variant="info">Updated</StatusBadge>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "popular" && styles.activeTab]}
            onPress={() => setActiveTab("popular")}
          >
            <Text style={[styles.tabText, activeTab === "popular" && styles.activeTabText]}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "all" && styles.activeTab]}
            onPress={() => setActiveTab("all")}
          >
            <Text style={[styles.tabText, activeTab === "all" && styles.activeTabText]}>All Countries</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search country"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onClear={() => setSearchQuery("")}
          />
        </View>

        {/* Countries List */}
        <View style={styles.countriesList}>
          {filteredCountries.map((country) => (
            <TouchableOpacity
              key={country.id}
              style={styles.countryCard}
              onPress={() => navigation.navigate("SendInternational", { country: country.id })}
            >
              <View style={styles.countryInfo}>
                <Text style={styles.countryFlag}>{country.flag}</Text>
                <View>
                  <Text style={styles.countryName}>{country.name}</Text>
                  <Text style={styles.countryDescription}>Send money to {country.name}</Text>
                </View>
              </View>
              <ChevronRight width={20} height={20} stroke={colors.gray[400]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.primaryButton}>
              <CreditCard width={20} height={20} stroke={colors.white} style={styles.buttonIcon} />
              <Text style={styles.primaryButtonText}>New Transfer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <DollarSign width={20} height={20} stroke={colors.emerald[600]} style={styles.buttonIcon} />
              <Text style={styles.secondaryButtonText}>Exchange Rates</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activeScreen="Money" navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  statusBar: {
    backgroundColor: colors.emerald[500],
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "flex-end",
  },
  statusBarText: {
    color: colors.white,
    fontSize: 12,
  },
  header: {
    backgroundColor: colors.emerald[500],
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  exchangeRateCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.gray[800],
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.emerald[500],
  },
  exchangeRateContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exchangeRateLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencyIconContainer: {
    backgroundColor: colors.emerald[100],
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
  },
  exchangeRateText: {
    fontSize: 14,
    color: colors.gray[500],
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.emerald[500],
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[500],
  },
  activeTabText: {
    color: colors.emerald[500],
  },
  searchContainer: {
    marginBottom: 24,
  },
  countriesList: {
    marginBottom: 24,
  },
  countryCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  countryInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  countryFlag: {
    fontSize: 24,
  },
  countryName: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[800],
    marginBottom: 2,
  },
  countryDescription: {
    fontSize: 14,
    color: colors.gray[500],
  },
  quickActions: {
    marginBottom: 24,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: colors.emerald[500],
    borderRadius: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.emerald[200],
    borderRadius: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    color: colors.emerald[600],
    fontSize: 16,
    fontWeight: "500",
  },
  buttonIcon: {
    marginRight: 8,
  },
})

export default InternationalMoneyTransferScreen

