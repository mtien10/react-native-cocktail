import styles from "./stylesProduct"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView, View, TextInput, Text, Dimensions, Image, FlatList, TouchableOpacity, SafeAreaViewBase } from "react-native";
import { Ionicons, Foundation, Feather, Entypo } from '@expo/vector-icons';
import { formatPrice } from "./formatPrice"



const Product = ({ route, navigation }) => {
    const insets = useSafeAreaInsets();
    const { width, height } = Dimensions.get("screen");
    const { infoProduct, randomNumber } = route.params
    const strIngredient = Array.from(Array(15).keys())


    return (
        <View style={styles.containerProduct}>
            <View>
                <View style={[styles.navbarProduct, { paddingTop: insets.top }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>

                    <Text style={{ fontWeight: "500", fontSize: 17 }}>Product</Text>

                    <TouchableOpacity style={styles.button}>
                        <Ionicons style={styles.iconCart} name="cart-outline" size={30} color="black" onPress={() => navigation?.navigate('Cart')} />
                    </TouchableOpacity>
                </View>
                <Image
                    style={{
                        ...styles.imageHome, width: width, height: width,
                        borderBottomLeftRadius: 80,
                        resizeMode: 'cover'
                    }}
                    source={{ uri: infoProduct.strDrinkThumb }} />
            </View>
            <TouchableOpacity style={{
                backgroundColor: "white",
                borderRadius: 45 / 2,
                position: "absolute",
                justifyContent: "center",
                alignItems: 'center',
                right: 20,
                width: 45,
                height: 45,
                top: width - 22.5,
                zIndex: 10
            }}>
                <Foundation name="heart" size={24} color="tomato" />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
                <View style={styles.barEvalute}>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: 'tomato', fontSize: 25 }}>{formatPrice(infoProduct.price + randomNumber)}</Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, fontSize: 16 }}>{infoProduct.strDrink}</Text>
                    </View>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        paddingTop: 20
                    }}>
                        <Feather name="star" size={24} color="gold" />
                        <Feather name="star" size={24} color="gold" />
                        <Feather name="star" size={24} color="gold" />
                        <Feather name="star" size={24} color="gold" />
                        <Feather name="star" size={24} color="gold" />
                    </TouchableOpacity>
                </View>

                <View style={styles.materials}>
                    <Text style={{ fontWeight: 'bold' }}>Materials</Text>
                    <Text>Ngon</Text>
                </View>

                <View style={styles.desciptionsScProduct}>
                    <Text style={{ fontWeight: 'bold' }}>Desciptions</Text>
                    <Text style={{ fontStyle: 'italic', marginTop: 10}}>{infoProduct.strInstructions}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.addToCart} onPress={() => navigation?.navigate('Cart')}>
                <View style={styles.buttonAddCart}>
                    <Entypo name="plus" size={24} color="white" />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Add to Cart</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default Product;