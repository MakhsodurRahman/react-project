const addToCart = (fish) => {
    console.log('Adding to cart:', fish);
    let id_Array = localStorage.getItem('fish_cart_ls') 
        ? JSON.parse(localStorage.getItem('fish_cart_ls')) 
        : [];
    
    if (!id_Array.includes(fish.fish_id)) {
        let newIdArray = [...id_Array, fish.fish_id];
        localStorage.setItem('fish_cart_ls', JSON.stringify(newIdArray));
    }
};

const addToWishList = (fish) => {
    console.log('Adding to wishlist:', fish);
    let id_Array = localStorage.getItem('fish_wish_ls') 
        ? JSON.parse(localStorage.getItem('fish_wish_ls')) 
        : [];

    if (!id_Array.includes(fish.fish_id)) {
        let newIdArray = [...id_Array, fish.fish_id];
        localStorage.setItem('fish_wish_ls', JSON.stringify(newIdArray));
    }
};

export { addToCart, addToWishList }; 
