import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export const icons = {
  index: (props) => <AntDesign name="home" size={26} {...props} />,
  profile: (props) => <AntDesign name="user" size={26} {...props} />,
  cart: (props) => <AntDesign name="shoppingcart" size={24} {...props} />,
  groups: (props) => <MaterialIcons name="groups" size={24} {...props} />,
};
