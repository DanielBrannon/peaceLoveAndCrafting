export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    switch(action.type) {
        case 'addToBasket':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'removeFromBasket':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {

                newBasket.splice(index, 1);

            } else {

                console.warn('Id doesnt exist')

            }
            return {
                ...state,
                basket: newBasket
            }
        case 'setUser':
            return {
                ...state,
                user: action.user
            }
        default: 
            return state;
    }
};

export default reducer;