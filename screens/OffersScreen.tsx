"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { ArrowLeft, ChevronDown, ChevronUp, Gift, Tag } from "lucide-react-native"
import { colors } from "../styles/colors"
import BottomNavigation from "../components/BottomNavigation"

interface OffersScreenProps {
  navigation: any
}

interface Offer {
  id: string
  title: string
  description: string
  expiryDate: string
  category: string
  status: "active" | "coming-soon" | "expired"
  code?: string
}

const OffersScreen = ({ navigation }: OffersScreenProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>("promotions")

  const offers: Offer[] = [
    {
      id: "offer1",
      title: "50% Cashback on Bill Payments",
      description: "Get 50% cashback up to K50 on your first bill payment this month.",
      expiryDate: "April 30, 2023",
      category: "promotions",
      status: "active",
      code: "BILL50",
    },
    {
      id: "offer2",
      title: "Free Transfers to Other Networks",
      description: "Send money to other networks without any fees for the next 7 days.",
      expiryDate: "April 15, 2023",
      category: "promotions",
      status: "active",
      code: "FREETX",
    },
    {
      id: "offer3",
      title: "Double Data on Bundles",
      description: "Purchase any data bundle and get double the amount for the same price.",
      expiryDate: "April 20, 2023",
      category: "data",
      status: "active",
      code: "DOUBLE",
    },
    {
      id: "offer4",
      title: "Weekend Special: 10% Off on Airtime",
      description: "Buy airtime this weekend and get 10% extra on every purchase.",
      expiryDate: "April 16, 2023",
      category: "airtime",
      status: "coming-soon",
    },
    {
      id: "offer5",
      title: "Refer a Friend, Get K25",
      description: "Refer a friend to Zamtel Money and both of you get K25 when they sign up.",
      expiryDate: "May 31, 2023",
      category: "referrals",
      status: "active",
      code: "REFER25",
    },
    {
      id: "offer6",
      title: "International Transfer Fee Waiver",
      description: "Send money internationally without any transfer fees.",
      expiryDate: "March 31, 2023",
      category: "promotions",
      status: "expired",
    },
  ]

  const categories = [
    { id: "promotions", label: "Promotions", icon: Gift },
    { id: "data", label: "Data Offers", icon: Tag },
    { id: "airtime", label: "Airtime Offers", icon: Tag },
    { id: "referrals", label: "Referral Rewards", icon: Gift },
  ]

  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null)
    } else {
      setExpandedSection(sectionId)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <View style={styles.statusBadgeActive}>
            <Text style={styles.statusTextActive}>Active</Text>
          </View>
        )
      case "coming-soon":
        return (
          <View style={styles.statusBadgeComing}>
            <Text style={styles.statusTextComing}>Coming Soon</Text>
          </View>
        )
      case "expired":
        return (
          <View style={styles.statusBadgeExpired}>
            <Text style={styles.statusTextExpired}>Expired</Text>
          </View>
        )
      default:
        return null
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offers & Promotions</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.contentContainer}>
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>Special Offers for You</Text>
            <Text style={styles.bannerSubtitle}>Discover exclusive deals and promotions tailored just for you.</Text>
          </View>

          {categories.map((category) => {
            const categoryOffers = offers.filter((offer) => offer.category === category.id)
            const isExpanded = expandedSection === category.id

            return (
              <View key={category.id} style={styles.categoryCard}>
                <TouchableOpacity style={styles.categoryHeader} onPress={() => toggleSection(category.id)}>
                  <View style={styles.categoryHeaderLeft}>
                    <category.icon color={colors.primary} size={20} style={styles.categoryIcon} />
                    <Text style={styles.categoryTitle}>{category.label}</Text>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryBadgeText}>{categoryOffers.length}</Text>
                    </View>
                  </View>
                  {isExpanded ? (
                    <ChevronUp size={20} color={colors.gray[500]} />
                  ) : (
                    <ChevronDown size={20} color={colors.gray[500]} />
                  )}
                </TouchableOpacity>

                {isExpanded && (
                  <View style={styles.categoryContent}>
                    {categoryOffers.length === 0 ? (
                      <Text style={styles.emptyText}>No offers available</Text>
                    ) : (
                      <View style={styles.offersList}>
                        {categoryOffers.map((offer) => (
                          <View key={offer.id} style={styles.offerCard}>
                            <View style={styles.offerHeader}>
                              <Text style={styles.offerTitle}>{offer.title}</Text>
                              {getStatusBadge(offer.status)}
                            </View>
                            <Text style={styles.offerDescription}>{offer.description}</Text>
                            <View style={styles.offerFooter}>
                              <Text style={styles.offerExpiry}>Expires: {offer.expiryDate}</Text>
                              {offer.code && offer.status === "active" && (
                                <View style={styles.offerCodeContainer}>
                                  <Text style={styles.offerCodeLabel}>Code:</Text>
                                  <View style={styles.offerCode}>
                                    <Text style={styles.offerCodeText}>{offer.code}</Text>
                                  </View>
                                </View>
                              )}
                            </View>
                            {offer.status === "active" && (
                              <TouchableOpacity
                                style={styles.redeemButton}
                                onPress={() => {
                                  // Handle redeeming offer
                                }}
                              >
                                <Text style={styles.redeemButtonText}>Redeem Offer</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                )}
              </View>
            )
          })}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation navigation={navigation} activeScreen="dashboard" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  banner: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
  },
  categoryCard: {
    marginBottom: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  categoryHeader: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryIcon: {
    marginRight: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[800],
  },
  categoryBadge: {
    marginLeft: 8,
    backgroundColor: colors.gray[100],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  categoryBadgeText: {
    fontSize: 12,
    color: colors.gray[700],
  },
  categoryContent: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: colors.gray[100],
  },
  emptyText: {
    textAlign: "center",
    paddingVertical: 16,
    color: colors.gray[500],
  },
  offersList: {
    gap: 12,
  },
  offerCard: {
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 8,
    padding: 12,
  },
  offerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  offerTitle: {
    fontWeight: "500",
    color: colors.gray[800],
    flex: 1,
    marginRight: 8,
  },
  statusBadgeActive: {
    backgroundColor: colors.green[100],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  statusTextActive: {
    fontSize: 12,
    color: colors.green[800],
  },
  statusBadgeComing: {
    backgroundColor: colors.blue[100],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  statusTextComing: {
    fontSize: 12,
    color: colors.blue[800],
  },
  statusBadgeExpired: {
    backgroundColor: colors.gray[100],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  statusTextExpired: {
    fontSize: 12,
    color: colors.gray[800],
  },
  offerDescription: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 8,
  },
  offerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  offerExpiry: {
    fontSize: 12,
    color: colors.gray[500],
  },
  offerCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  offerCodeLabel: {
    fontSize: 12,
    marginRight: 8,
  },
  offerCode: {
    backgroundColor: colors.gray[100],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  offerCodeText: {
    fontSize: 14,
    fontFamily: "monospace",
  },
  redeemButton: {
    marginTop: 12,
    backgroundColor: colors.primary,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  redeemButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.white,
  },
})

export default OffersScreen

