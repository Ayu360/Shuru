import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

const GroupBuyComponent = () => {
  return (
    <View style={styles.container}>
      {/* Header with product info */}
      <View style={styles.header}>
        <Feather name="package" size={24} color="4A4A4A" />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>
            Rose Gold Serum, ₹337-₹260 with a group
          </Text>
          <Text style={styles.productSubtitle}>
            150ml/pack, rated 4.3(1.3k), 12+ Ayurvedic...
          </Text>
        </View>
      </View>

      {/* Buy button */}
      <TouchableOpacity style={styles.buyButton}>
        <View style={{ width: "60%" }}>
          <Text style={styles.buyButtonText}>
            Buy at price ₹370{" "}
            <Text
              style={{
                ...styles.buyButtonText,
                textDecorationLine: "line-through",
              }}
            >
              ₹710
            </Text>
          </Text>
        </View>
        <View style={{ width: "30%" }}>
          <Text style={styles.viewProduct}>View Product</Text>
        </View>
      </TouchableOpacity>

      {/* Group creation info */}
      <View style={styles.groupInfo}>
        <Text style={styles.groupCreated}>You Created this Group</Text>
        <Text style={styles.timestamp}>4:21 pm, Today</Text>
      </View>

      {/* Timer */}
      <View style={styles.buyersList}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>
            24 hours time start to confirm order
          </Text>
        </View>
      </View>

      {/* Buyers list */}
      <View style={styles.buyersList}>
        <View style={styles.buyerItem}>
          <AntDesign name="user" size={24} color="#666" />
          <Text style={styles.buyerText}>Aman want to buy</Text>
        </View>
        <View style={styles.buyerItem}>
          <AntDesign name="user" size={24} color="#666" />
          <Text style={styles.buyerText}>Sachin want to buy</Text>
        </View>
        <View style={styles.buyerItem}>
          <AntDesign name="user" size={24} color="#666" />
          <Text style={styles.buyerText}>Sakshi want to buy</Text>
        </View>
      </View>

      {/* Confirmation status */}
      <View style={styles.buyersList}>
        <View style={styles.confirmation}>
          <AntDesign name="check" size={24} color="#fff" />
          <Text style={styles.confirmationText}>
            Sakshi confirmed order (1/3) confirmed
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF9F6",
    padding: 15,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  productInfo: {
    marginLeft: 10,
    flex: 1,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  productSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  buyButton: {
    backgroundColor: "#3A3A3A",
    padding: 10,
    borderRadius: 4,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buyButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  viewProduct: {
    color: "#fff",
    textAlign: "right",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  groupInfo: {
    marginBottom: 10,
    alignSelf: "center",
  },
  groupCreated: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  timestamp: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  timer: {
    backgroundColor: "#EAEAEA",
    padding: 8,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  timerText: {
    color: "#666",
    fontSize: 12,
  },
  buyersList: {
    gap: 8,
    marginBottom: 10,
    alignSelf: "center",
  },
  buyerItem: {
    backgroundColor: "#EAEAEA",
    padding: 8,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buyerText: {
    color: "#666",
    fontSize: 12,
  },
  confirmation: {
    backgroundColor: "#3A3A3A",
    padding: 8,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmationText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default GroupBuyComponent;
