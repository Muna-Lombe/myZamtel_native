
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ShoppingCart } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const ProductDetailScreen = ({ navigation, route }) => {
  const { productId } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Product Details" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <Image 
          source={require("../assets/placeholder.png")} 
          style={styles.productImage} 
        />
        
        <View style={styles.details}>
          <Text style={styles.productName}>iPhone 13</Text>
          <Text style={styles.price}>$999.99</Text>
          
          <Text style={styles.description}>
            The latest iPhone featuring a stunning display, powerful A15 Bionic chip, 
            and advanced camera system for incredible photos and videos.
          </Text>

          <View style={styles.specs}>
            <Text style={styles.specsTitle}>Specifications:</Text>
            <Text style={styles.specsItem}>• 6.1-inch Super Retina XDR display</Text>
            <Text style={styles.specsItem}>• A15 Bionic chip</Text>
            <Text style={styles.specsItem}>• Dual-camera system</Text>
            <Text style={styles.specsItem}>• Face ID</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <ShoppingCart width={24} height={24} stroke={colors.white} />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  content: {
    flex: 1,
  },
  productImage: {
    width: "100%",
    height: 300,
  },
  details: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: colors.emerald[600],
    fontWeight: "600",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: colors.gray[600],
    lineHeight: 24,
    marginBottom: 24,
  },
  specs: {
    backgroundColor: colors.gray[100],
    padding: 16,
    borderRadius: 12,
  },
  specsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 12,
  },
  specsItem: {
    fontSize: 16,
    color: colors.gray[600],
    marginBottom: 8,
  },
  footer: {
    padding: 20,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  addToCartButton: {
    backgroundColor: colors.emerald[500],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
})

export default ProductDetailScreen
