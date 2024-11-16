import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CollapsibleSection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleExpand} style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.arrow}>{isExpanded ? "▲" : "▼"}</Text>
        </TouchableOpacity>
        {isExpanded && <Text style={styles.content}>{content}</Text>}
      </View>
    </View>
  );
};

export default CollapsibleSection;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  container: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  arrow: {
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    paddingVertical: 10,
    fontSize: 14,
    color: "#555",
  },
});
