import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
const ProductList = () => {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((json) => setProducts(json.products))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Products for Sale:</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        <View style={styles.productDetails}>
                            <Text style={styles.productTitle}>{item.title}</Text>
                            <Text style={styles.productDescription}>{item.description}</Text>
                            <Text style={styles.productPrice}>{item.price}</Text>
                        </View>
                        <TouchableOpacity style={styles.addToCartButton}>
                            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 16,
    },
    // productDetails: {
    //     flex: 2,
    // },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productDescription: {
        color: 'gray',
        marginBottom: 4,
    },
    productPrice: {
        fontWeight: 'bold',
    },
    addToCartButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    addToCartButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


export default ProductList;