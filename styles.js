import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgb(243,246,250)',
        flex: 1
    },
    infoMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        paddingHorizontal: 20
    },
    search: {
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchInput: {
        height: 40,
        padding: 10,
        width: 250,
        marginLeft: 5
    },
    iconCart: {
        paddingTop: 7,
        paddingRight: 0
    },
    product: {
        flexDirection: 'column',
        marginTop: 30,
        width: 180,
        height: 300,
        borderRadius: 25,
        marginRight: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    zoneProduct: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        // backgroundColor: 'gray',
        borderRadius: 25,
    },
    heart: {

    },
    imageProduct: {
        width: 160,
        height: 160,
        borderRadius: 25,
    },
    infoProduct: {
        marginTop: 20,
        // backgroundColor: 'azure',
        marginLeft: 15,
    },
    priceProduct: {
        flexDirection: 'row',
        marginTop: 20,
        // backgroundColor: 'beige',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center',
    },
    textBest: {

    },
    bestProduct: {
        flexDirection: 'row',
        marginTop: 40,
        borderRadius: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    imageBest: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginLeft: 15
    },
    infoBest: {
        marginLeft: 20,
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical: 5
    },
    textExplore: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    best: {
        paddingHorizontal: 20
    },
    manHai: {
        backgroundColor: 'navy'
    },
    containerProduct: {
        backgroundColor: 'rgb(243,246,250)',
        // backgroundColor: 'cornsilk',
        flex: 1,
    },
    navbarProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        zIndex: 1
    },
    barEvalute: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        marginHorizontal: 15,
    },
    materials: {
        paddingTop: 30,
        marginHorizontal: 15
    },
    desciptionsScProduct: {
        paddingTop: 60,
        marginHorizontal: 15
    },
    addToCart: {
        width: 190,
        height: 70,
        backgroundColor: 'deepskyblue',
        borderTopLeftRadius: 50,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    buttonAddCart: {
        flexDirection: 'row',
        position: 'absolute',
    },
    containerCart: {
        backgroundColor: 'rgb(243,246,250)',
        flex: 1
    },
    itemCart: {
        flexDirection: 'row',
        marginTop: 200,
        // borderRadius: 20,
        // paddingVertical: 15,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        // elevation: 10,
    },
    imageItemCart: {
        width: 95,
        height: 95,
        borderRadius: 20,
        marginLeft: 20
    },
    infoItemCart: {
        marginLeft: 25,
        justifyContent: 'space-around',
        flex: 1,
    },
    amount: {
        height: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: 60,
        height: 20,
        borderWidth: 0.2,
        marginRight: 25,
        marginTop: 60
    },
    total: {
        // height: 300,
        marginTop: 180,
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.44,
        shadowRadius: 7.27,
        elevation: 10,
        flex: 1,
    },
    selectedItems: {
        marginTop: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shipping: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    subTotal: {
        marginTop: 70,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    submitCheckout: {
        marginTop: 30,
        width: 300,
        height: 60,
        backgroundColor: 'darkblue',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
    },
});