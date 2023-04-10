import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';

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
        <FlatList data={products} keyExtractor={(product) => product.id}
            renderItem={({ item }) => <Text>{item.title}</Text>}
        />
    );
};

export default ProductList;