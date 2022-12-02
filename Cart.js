import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from "./styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, Foundation, Feather, Entypo, Fontisto, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Cart = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const itemName = "Item Name";
    const description = "Desciption";
    const priceProduct = "$250.00";

    return (
        <View style={styles.containerCart}>

            <View style={[styles.navbarProduct, { paddingTop: insets.top }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <Text style={{ fontWeight: "500", fontSize: 17 }}>Cart</Text>

                <TouchableOpacity style={styles.button}>
                    <Ionicons style={styles.iconCart} name="cart-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.itemCart}>

                <TouchableOpacity style={{
                    justifyContent: 'center', marginLeft: 15,
                }}
                >
                    <Fontisto name="checkbox-active" size={16} color="tomato" />
                </TouchableOpacity>

                <Image
                    style={styles.imageItemCart}
                    source={require("./assets/chair.webp")}
                />
                <View style={styles.infoItemCart}>
                    <Text style={{ fontWeight: "bold" }}>{itemName}</Text>
                    <Text style={{color: 'tomato'}}>
                        {priceProduct}
                    </Text>
                </View>
                
                <View style={styles.amount}>
                    <TouchableOpacity>
                        <AntDesign name="minus" size={14} color="black" />
                    </TouchableOpacity>
                    <Text style={{ 
                        marginHorizontal: 10,
                        }}>1</Text>
                    <TouchableOpacity> 
                        <AntDesign name="plus" size={14} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.total}>
                <View style={styles.selectedItems}>
                    <Text style={{
                        fontSize: 18}}>
                            Selected Items
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        color: 'tomato'}}>
                            {priceProduct}
                    </Text>
                </View>
                <View style={styles.shipping}>
                    <Text style={{fontSize: 16}}>Shipping Fee</Text>
                    <Text style={{
                        fontSize: 16,
                        color: 'tomato'}}>{priceProduct}</Text>
                </View>
                <View style={{
                    height: 1,
                    width: '90%',
                    backgroundColor: 'grey',
                    marginTop: 25,
                    marginLeft: 20
                }}>

                </View>
                <View style={styles.subTotal}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Subtotal</Text>
                    <Text style={{
                        fontSize: 25,
                        color: 'tomato'}}>{priceProduct}</Text>
                </View>

                <TouchableOpacity style={styles.submitCheckout}>
                    <Text style={{color: 'white', fontWeight: '800', fontSize: 18}}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cart;