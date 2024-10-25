const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    else{
        return []; 
    }
}

const saveCartToLS = cart => {
    //stringify kore local storage k patai dibe 
    const cartStringified = JSON.stringify(cart); 
    localStorage.setItem('cart', cartStringified); 
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id); 

    //save to local storage 
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    //removing every id 
    const remaining = cart.filter(idx => idx != id);
    saveCartToLS(remaining); 

}

export {addToLS , getStoredCart , removeFromLS}; 