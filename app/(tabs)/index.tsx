import data from "@/assets/data.json";
import useCartStore from "@/store/cartStore";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Image,
  View,
  ListRenderItem,
  Text,
  TouchableOpacity,
} from "react-native";

const index = () => {
  const { setSelectedId } = useCartStore();
  const renderItem: ListRenderItem<any> = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{ uri: item.image }} />
      <View style={styles.itemContainer}>
        <Text style={styles.cartItemName}>{item.title}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            setSelectedId(item.id);
            router.navigate(`./${item.id}`);
          }}
        >
          <MaterialIcons name="navigate-next" size={20} color={"#000"} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItemContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,

    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 5,
  },
  cartItemImage: {
    height: 50,
    width: 50,
  },
  itemContainer: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    borderLeftColor: "#ccc",
    borderLeftWidth: 1,
    height: "100%",
  },
});
