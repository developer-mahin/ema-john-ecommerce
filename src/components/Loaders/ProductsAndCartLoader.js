import { getStoredCart } from "../../utilities/fakedb";

const productsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const savedCart = getStoredCart();
    const previousData = []
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);

        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity
            previousData.push(addedProduct)
        }
    }
    return {products, previousData}
}

export default productsAndCartLoader;