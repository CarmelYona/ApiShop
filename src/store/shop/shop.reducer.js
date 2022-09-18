const initialState = {
    shop: [],
    brands: [],
    currBrand: {},
    filterBy: {
        budget: '',
        age: '',
        gender: '',
        name: ''
    }
}

export function shopReducer(state = initialState, action) {

    var products

    switch (action.type) {
        case 'SET_BRANDS':
            return { ...state, brands: action.brands }
        case 'SET_SHOP':
            return { ...state, shop: action.shop }
        case 'REMOVE_PRODUCT':
            products = state.products.filter(product => product._id !== action.productId)
            return { ...state, products }
        case 'ADD_PRODUCT':
            products = [action.product, ...state.products]
            return { ...state, products }
        case 'UPDATE_PRODUCT':
            products = state.products.map(currProduct =>
                (currProduct._id === action.product._id) ? action.product : currProduct)
            return { ...state, products }
        case 'SET_FILTERBY':
            return { ...state, filterBy: action.filterBy }
        default:
            return state
    }
}
