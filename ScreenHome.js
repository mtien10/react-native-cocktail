import styles from "./stylesHome"
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, TextInput, Text, Dimensions, Image, FlatList, TouchableOpacity } from "react-native";
import { SimpleLineIcons, FontAwesome5, EvilIcons, Ionicons, Feather, AntDesign, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import drinks from './data.json'
import { formatPrice } from "./formatPrice"

const ScreenHome = ({ navigation }) => {
    const randomNumber =  Math.floor(Math.random() * 19) + 1
    const bestSelling = drinks.drinks[randomNumber];

    const choiceProduct = (item) => {
        navigation?.navigate('Product', {
            infoProduct: item,
            randomNumber
        })

    };

    const renderItem = ({ item, index }) => {
        const lastPrice = item.price + index
        const newItem = { ...item, price: lastPrice }


        return (
            <TouchableOpacity style={styles.product} onPress={() => choiceProduct(newItem)}>
                <View style={styles.zoneProduct}>
                    <Image
                        style={styles.imageProduct}
                        source={{ uri: item.strDrinkThumb }}
                    />
                    <TouchableOpacity style={{
                        backgroundColor: "red",
                        borderRadius: 30 / 2,
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: 'center',
                        top: 10,
                        right: 20,
                        width: 25,
                        height: 25,
                    }}>
                        <Foundation style={styles.heart} name="heart" size={16} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.infoProduct}>
                    <Text style={{ fontWeight: "bold" }}>{item.strDrink}</Text>
                    <Text style={{ fontStyle: "italic" }} numberOfLines={2}>{item.strInstructions}</Text>
                </View>

                <View style={styles.priceProduct}>
                    <Text>
                        {formatPrice(lastPrice)}
                    </Text>
                    <TouchableOpacity>
                        <AntDesign name="pluscircle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>)
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.infoMenu}>
                <TouchableOpacity
                    style={styles.button}>
                    <SimpleLineIcons name="menu" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>

                    <View style={{
                        backgroundColor: "black",
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: 'center',
                        width: 28,
                        height: 28,
                    }}>

                        <FontAwesome5 name="user-alt" size={15} color="white" />


                    </View>
                </TouchableOpacity>
            </View>     
                <View style={styles.navbar}>
                    <View style={styles.search}>
                        <TouchableOpacity>
                            <Feather style={styles.searchIcon} name="search" size={24} color="black" />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                        />
                    </View>            
                <TouchableOpacity>
                    <Ionicons style={styles.iconCart} name="cart-outline" size={30} color="black" onPress= {() => navigation?.navigate('Cart')} />
                </TouchableOpacity>
            </View>

            <View style={styles.textExplore}>
                <Text style={{ fontWeight: "bold", fontSize: 28 }}>
                    Explore
                </Text>
            </View>

            <FlatList
                horizontal={true}
                data={drinks.drinks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    marginBottom: 50
                }}
                style={{ flexGrow: 0 }}
            />

            <View style={styles.best}>
                <View style={styles.textBest}>
                    <Text style={{ fontWeight: "bold", fontSize: 28 }}>
                        Best Selling
                    </Text>
                </View>

                <View style={styles.bestProduct}>
                    <Image
                        style={styles.imageBest}
                        source={{uri: bestSelling.strDrinkThumb}}
                    />
                    <View style={styles.infoBest}>
                        <Text style={{ fontWeight: "bold" }}>{bestSelling.strDrink}</Text>
                        <Text style={{ fontStyle: 'italic' }} numberOfLines={2}>{bestSelling.strInstructions}</Text>
                        <Text>
                            {formatPrice(bestSelling.price + randomNumber)}
                        </Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: "flex-end", marginRight: 15, borderRadius: 15 }}
                        onPress={() => choiceProduct(bestSelling)}
                    >
                        <MaterialCommunityIcons name="arrow-right-box" size={35} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ScreenHome;