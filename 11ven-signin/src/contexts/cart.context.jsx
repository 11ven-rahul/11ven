import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd, setAddedItems) => {

    const existingCartItem = cartItems.some(ct => ct.name === productToAdd.name)

    const belongsToCore = cartItems.some(ct => (
        ct.name === "Base Camp" || ct.name === "Pick Your Tools" || ct.name === "Pick Your Destination"
        ))
    
    if(belongsToCore){
        if(existingCartItem) {
            return [...cartItems];
        }else if(!(productToAdd.name === "Base Camp" || productToAdd.name === "Pick Your Tools" || productToAdd.name === "Pick Your Destination")){
            
            return [...cartItems, { ...productToAdd}]
        }else{
            const obj = cartItems.map(ct => (
                ct.name === "Base Camp" || ct.name === "Pick Your Tools" || ct.name === "Pick Your Destination" ? ct : null
                ))
            const indexOfItem = cartItems.findIndex(x => x === obj[0])
            console.log(obj, indexOfItem)
            cartItems.splice(indexOfItem, 1)
            return [{ ...productToAdd}, ...cartItems]
        }
    }else{
        if(existingCartItem) {
            return [...cartItems]
        }  
    }
    


    return [...cartItems, { ...productToAdd}]
};

const clearCartItem = (cartItems, cartItemToClear, setAddedItems) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id );

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
    sliderValue: 1,
    setSliderValue: () => {},
    addedItems: [],
    setAddedItems: () => {},
});

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [sliderValue, setSliderValue] = useState(1);
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) =>
        cartItem.name === "Base Camp" || cartItem.name === "Pick Your Tools" || cartItem.name === "Pick Your Destination" ?
        total + sliderValue * cartItem.price
        :
        total + cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems, sliderValue]);

    useEffect (() => {
        setAddedItems(cartItems.map(ct => ct.id));
    }, [cartItems])

    useEffect (() => {
        console.log(addedItems)
    }, [addedItems])
    

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd, setAddedItems));
    };

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear, setAddedItems));
    };

    const value = { 
        cartItems, 
        cartTotal, 
        addItemToCart, 
        sliderValue, 
        setSliderValue, 
        clearItemFromCart,
        addedItems,
        setAddedItems, 
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}