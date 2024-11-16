import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

const HeaderBar = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 38 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newMinutes === 0) {
          if (newHours === 0) {
            clearInterval(timer);
            return prev;
          }
          newHours--;
          newMinutes = 59;
        } else {
          newMinutes--;
        }

        return { hours: newHours, minutes: newMinutes };
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Office Group</Text>

      <View style={styles.rightSection}>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            {`${timeLeft.hours}h ${timeLeft.minutes}m`}
          </Text>
          <View style={styles.circle}>
            <Text style={styles.circleText}>1</Text>
          </View>
        </View>

        {/* <TouchableOpacity style={styles.menuButton}>
          <FontAwesome6 name="clock-rotate-left" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FAF9F6",
    height: 60,
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    flex: 1,
    marginLeft: 16,
    fontFamily: "System", // Using system font that looks similar to the image
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 8,
  },
  timerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  menuButton: {
    padding: 4,
  },
});

export default HeaderBar;
