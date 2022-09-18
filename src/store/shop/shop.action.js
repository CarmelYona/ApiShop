import { shopService } from '../../services/shop.service.js'

export function loadBrands(filterBy) {
    return async dispatch => {
        try {
            const brands = await shopService.query(filterBy)
            dispatch({ type: 'SET_BRANDS', brands })
        } catch (err) {
            console.log(err)
        }
    }
}

export function loadShop() {
    return async dispatch => {
        try {
            const shop = await shopService.getShop()
            dispatch({ type: 'SET_SHOP', shop })
        } catch (err) {
            console.log(err)
        }
    }
}

export function removeProduct(productId) {
    return async dispatch => {
        try {
            await shopService.remove(productId)
            dispatch({ type: 'REMOVE_PRODUCT', productId })
        } catch (err) {
            console.log(err)
        }
    }
}

export function saveProduct(product) {
    return async dispatch => {
        const actionType = (product._id) ? 'UPDATE_PRODUCT' : 'ADD_PRODUCT'
        try {
            const savedProduct = await shopService.save(product)
            dispatch({ type: actionType, product: savedProduct })
        } catch (err) {
            console.log(err)
        }
    }
}

export function setFilter(filterBy) {
    return (dispatch) => {
        return dispatch({
            type: 'SET_FILTERBY',
            filterBy
        })
    }
}
