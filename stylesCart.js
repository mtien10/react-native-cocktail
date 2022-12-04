import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerCart: {
        backgroundColor: 'rgb(243,246,250)',
        flex: 1
    },
    itemCart: {
        flexDirection: 'row',
        marginBottom: 30
    },
    imageItemCart: {
        width: 95,
        height: 95,
        borderRadius: 20,
        marginLeft: 15
    },
    infoItemCart: {
        justifyContent: 'space-around',
    },
    amount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: 60,
        height: 20,
        borderWidth: 0.2,
    },
    total: {
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
    },
    selectedItems: {
        marginBottom: 5,
        paddingTop: 25,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shipping: {
        flexDirection: 'row',
        marginBottom: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    subTotal: {
        marginBottom: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    submitCheckout: {
        marginBottom: 50,
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
    detailItemCart:{
        flexDirection: 'row',
    },
    navbarCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        zIndex: 1
    },
});