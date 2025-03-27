"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone } from "lucide-react-native"
import { colors } from "../styles/colors"
import BottomNavigation from "../components/BottomNavigation"

interface HelpScreenProps {
  navigation: any
}

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

const HelpScreen = ({ navigation }: HelpScreenProps) => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("general")

  const faqs: FAQ[] = [
    {
      id: "faq1",
      question: "How do I send money to another Zamtel Money user?",
      answer:
        "To send money to another Zamtel Money user, go to the 'Send Money' option from the dashboard, enter the recipient's phone number, enter the amount, confirm the details, and enter your PIN to complete the transaction.",
      category: "general",
    },
    {
      id: "faq2",
      question: "What are the transaction limits?",
      answer:
        "The daily transaction limit is K10,000. The minimum amount for sending money is K5, and the maximum is K5,000 per transaction.",
      category: "general",
    },
    {
      id: "faq3",
      question: "How do I cash out money from my account?",
      answer:
        "To cash out, select 'Cash Out' from the dashboard, enter the agent code, specify the amount, confirm the details, and enter your PIN to complete the transaction.",
      category: "general",
    },
    {
      id: "faq4",
      question: "What should I do if my transaction fails?",
      answer:
        "If your transaction fails, check your balance and network connection. If the issue persists, contact our customer support at 100 from your Zamtel line or visit the nearest Zamtel shop.",
      category: "transactions",
    },
    {
      id: "faq5",
      question: "How do I change my PIN?",
      answer:
        "To change your PIN, go to your Profile, select Security Settings, choose 'Change PIN', enter your current PIN, then enter and confirm your new PIN.",
      category: "security",
    },
    {
      id: "faq6",
      question: "What fees are charged for transactions?",
      answer:
        "Fees vary depending on the transaction type and amount. You can view the fee structure in the app under 'Fees & Charges' in the Support section.",
      category: "transactions",
    },
    {
      id: "faq7",
      question: "How do I recover my account if I lose my phone?",
      answer:
        "If you lose your phone, call our customer support immediately at 100 from any Zamtel line to block your account. Visit a Zamtel shop with your ID to recover your account.",
      category: "security",
    },
    {
      id: "faq8",
      question: "Can I use Zamtel Money internationally?",
      answer:
        "Yes, you can send money internationally through our International Money Transfer service. Select 'International Transfer' from the dashboard to get started.",
      category: "general",
    },
  ]

  const categories = [
    { id: "general", label: "General" },
    { id: "transactions", label: "Transactions" },
    { id: "security", label: "Security" },
  ]

  const filteredFAQs = faqs.filter((faq) => faq.category === activeCategory)

  const toggleFAQ = (faqId: string) => {
    if (expandedFAQ === faqId) {
      setExpandedFAQ(null)
    } else {
      setExpandedFAQ(faqId)
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & FAQs</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.contentContainer}>
          {/* Contact Support Section */}
          <View style={styles.supportCard}>
            <View style={styles.supportHeader}>
              <HelpCircle size={20} color={colors.primary} style={styles.supportIcon} />
              <Text style={styles.supportTitle}>Need Help?</Text>
            </View>
            <Text style={styles.supportText}>Can't find what you're looking for? Contact our support team.</Text>
            <View style={styles.supportActions}>
              <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate("Support")}>
                <MessageCircle size={18} color={colors.primary} style={styles.buttonIcon} />
                <Text style={styles.supportButtonText}>Chat Support</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.supportButton}
                onPress={() => {
                  // Handle call support
                }}
              >
                <Phone size={18} color={colors.primary} style={styles.buttonIcon} />
                <Text style={styles.supportButtonText}>Call 100</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* FAQ Categories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  activeCategory === category.id ? styles.activeCategoryButton : styles.inactiveCategoryButton,
                ]}
                onPress={() => setActiveCategory(category.id)}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    activeCategory === category.id ? styles.activeCategoryText : styles.inactiveCategoryText,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* FAQs */}
          <View style={styles.faqCard}>
            <Text style={styles.faqTitle}>Frequently Asked Questions</Text>

            {filteredFAQs.length === 0 ? (
              <Text style={styles.emptyText}>No FAQs found in this category</Text>
            ) : (
              <View style={styles.faqList}>
                {filteredFAQs.map((faq) => (
                  <View key={faq.id} style={styles.faqItem}>
                    <TouchableOpacity style={styles.faqQuestion} onPress={() => toggleFAQ(faq.id)}>
                      <Text style={styles.questionText}>{faq.question}</Text>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp size={18} color={colors.gray[500]} />
                      ) : (
                        <ChevronDown size={18} color={colors.gray[500]} />
                      )}
                    </TouchableOpacity>

                    {expandedFAQ === faq.id && (
                      <View style={styles.faqAnswer}>
                        <Text style={styles.answerText}>{faq.answer}</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation navigation={navigation} activeScreen="help" />
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
  supportCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  supportHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  supportIcon: {
    marginRight: 8,
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[800],
  },
  supportText: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 16,
  },
  supportActions: {
    flexDirection: "row",
    gap: 12,
  },
  supportButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${colors.primary}20`,
    padding: 12,
    borderRadius: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  supportButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.primary,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  activeCategoryButton: {
    backgroundColor: colors.primary,
  },
  inactiveCategoryButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  categoryButtonText: {
    fontSize: 14,
  },
  activeCategoryText: {
    color: colors.white,
  },
  inactiveCategoryText: {
    color: colors.gray[700],
  },
  faqCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  faqTitle: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
  },
  emptyText: {
    textAlign: "center",
    padding: 16,
    color: colors.gray[500],
  },
  faqList: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[100],
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  faqQuestion: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[800],
    flex: 1,
    marginRight: 8,
  },
  faqAnswer: {
    padding: 16,
    paddingTop: 0,
    backgroundColor: colors.gray[50],
  },
  answerText: {
    fontSize: 14,
    color: colors.gray[600],
    lineHeight: 20,
  },
})

export default HelpScreen

