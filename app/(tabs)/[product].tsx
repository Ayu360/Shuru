import { ActivityIndicator, Alert, SafeAreaView, View } from "react-native";
import Carousel from "@/components/Carsoul";
import { router, useLocalSearchParams } from "expo-router";
import ProductDetails from "@/components/ProductDetails";
import useFetchData from "@/hooks/useFetchData";
import { useEffect } from "react";
import useCartStore from "@/store/cartStore";

const Product = () => {
  const id = useLocalSearchParams();
  const { fetchData, loading, error, response } = useFetchData();
  const { selectedId } = useCartStore();

  useEffect(() => {
    fetchData(`https://fakestoreapi.com/products/${id.product}`);
  }, [selectedId]);

  if (error !== null && response !== undefined && response !== null) {
    Alert.alert("Something went Wrong please try again later!");
    router.dismiss(1);
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      {loading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} color={"green"} />
        </View>
      )}
      {!loading && response !== undefined && response !== null && (
        <>
          <Carousel image={response?.image} />
          <ProductDetails response={response} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Product;
