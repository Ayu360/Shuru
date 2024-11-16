import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const GroupBuyCard = () => {
  const [timeLeft, setTimeLeft] = useState(35 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s left`;
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Office</Text>
        <View style={styles.timeContainer}>
          <FontAwesome name="clock-o" size={20} color="#ccc" />
          <Text style={styles.timeText}>{formatTime(timeLeft)}</Text>
        </View>
      </View>

      <View style={styles.userSection}>
        <View>
          <Text style={styles.labelText}>Confirmed by</Text>
          <View>
            <View style={styles.avatarGroup}>
              <View style={[styles.avatar, { marginRight: -8 }]}>
                <FontAwesome name="user-circle-o" size={20} color="#666666" />
              </View>
              <View style={styles.avatar}>
                <FontAwesome name="user-circle-o" size={20} color="#666666" />
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.labelText}>Waitlist</Text>
          <View>
            <View style={styles.avatarGroup}>
              <View style={[styles.avatar, { marginRight: -8 }]}>
                <FontAwesome name="user-circle-o" size={20} color="#666666" />
              </View>
              <View style={[styles.avatar, { marginRight: -8 }]}>
                <FontAwesome name="user-circle-o" size={20} color="#666666" />
              </View>
              <View style={styles.avatar}>
                <FontAwesome name="user-circle-o" size={20} color="#666666" />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.promotionContainer}>
        <View style={styles.promotionTextContainer}>
          <Text style={styles.promotionText}>
            Unlock 20% off with 1 more buyer
          </Text>
          <Text style={styles.percentageText}>+5%</Text>
        </View>
        <View style={styles.arrowCircle}>
          <Text style={styles.arrowText}>↑</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Buy at ₹350</Text>
          <View
            style={{
              backgroundColor: "#d2d79f",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <Text style={styles.discountText}>+20% off</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Visit group <Text>{"->"}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff8e8",
    borderRadius: 8,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    maxWidth: 400,
    margin: 10,
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    color: "#16a34a",
    fontWeight: "500",
    marginTop: 12,
    // backgroundColor: "red",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    position: "absolute",
    right: -16,
    borderTopEndRadius: 8,
    padding: 10,
    width: 120,
  },
  timeText: {
    marginLeft: 4,
    color: "#ccc",
    fontSize: 12,
  },
  userSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  labelText: {
    color: "#666666",
    fontSize: 12,
    marginRight: 8,
  },
  avatarGroup: {
    flexDirection: "row",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  promotionContainer: {
    backgroundColor: "#dcfce7",
    borderRadius: 20,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  promotionTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  promotionText: {
    color: "black",
    fontWeight: "600",
    padding: 12,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: "#90b77d",
  },
  percentageText: {
    color: "black",
  },
  arrowCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#22c55e",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  arrowText: {
    color: "white",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontWeight: "500",
    marginRight: 8,
  },
  discountText: {
    color: "#42855b",
  },
  button: {
    backgroundColor: "#16a34a",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
});

export default GroupBuyCard;
