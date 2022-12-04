import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        zIndex: 1,
        position: 'absolute'
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
});