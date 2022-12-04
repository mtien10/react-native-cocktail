import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, TextInput, SafeAreaView } from 'react-native';
import styles from "./stylesCart";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, Foundation, Feather, Entypo, Fontisto, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import drinks from './data.json'
import _ from "lodash"
import { formatPrice } from './formatPrice';


const Cart = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const priceProduct = "$250.00";
    const [selectedItems, setSelectedItems] = useState([])
    
    const onPressItem = (drinkItem) => {
        const { idDrink } = drinkItem
        const cloneSelected = [...selectedItems]
        if (!cloneSelected.includes(idDrink)) {
            cloneSelected.push(idDrink)
        } else {
            cloneSelected.splice(cloneSelected.indexOf(idDrink), 1)
        }
        
        setSelectedItems(cloneSelected)
    }
    
    const renderItem = ({ item, index }) => {
        const lastPrice = item.price + index
        
        return (
            <View style={styles.itemCart}>
                <TouchableOpacity style={{
                    justifyContent: 'center', marginLeft: 15,
                }}
                    onPress={() => onPressItem(item)}
                >
                    {selectedItems.includes(item.idDrink)
                        ? <Fontisto name="checkbox-active" size={15} color="tomato" />
                        : <Fontisto name="checkbox-passive" size={16} color="black" />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.detailItemCart}>
                    <Image
                        style={styles.imageItemCart}
                        source={{ uri: item.strDrinkThumb }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, justifyContent: 'space-between', marginLeft: 20, marginVertical: 20 }}>
                    <View style={styles.infoItemCart}>
                        <Text style={{ fontWeight: "bold" }}>{item.strDrink}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 25 }}>
                        <Text style={{ color: 'tomato' }}>
                            {formatPrice(lastPrice)}
                        </Text>
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
                </View>

            </View>

        )
    }



    return (
        <View style={[styles.containerCart, { paddingTop: insets.top }]}>
            <View style={[styles.navbarCart]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <Text style={{ fontWeight: "500", fontSize: 17 }}>Cart</Text>

                <TouchableOpacity style={styles.button}>
                    <Ionicons style={styles.iconCart} name="cart-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={drinks.drinks}
                extraData={selectedItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20
                }}
            />


            <View style={styles.total}>
                <View style={styles.selectedItems}>
                    <Text style={{
                        fontSize: 18
                    }}>
                        Selected Items
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        color: 'tomato'
                    }}>
                        {priceProduct}
                    </Text>
                </View>
                <View style={styles.shipping}>
                    <Text style={{ fontSize: 16 }}>Shipping Fee</Text>
                    <Text style={{
                        fontSize: 16,
                        color: 'tomato'
                    }}>{priceProduct}</Text>
                </View>
                <View style={{
                    height: 1,
                    width: '90%',
                    backgroundColor: 'grey',
                    marginBottom: 50,
                    marginLeft: 20
                }}>

                </View>
                <View style={styles.subTotal}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Subtotal</Text>
                    <Text style={{
                        fontSize: 25,
                        color: 'tomato'
                    }}>{priceProduct}</Text>
                </View>

                <TouchableOpacity style={styles.submitCheckout} onPress={() => navigation?.navigate('Home')}>
                    <Text style={{ color: 'white', fontWeight: '800', fontSize: 18 }}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cart;