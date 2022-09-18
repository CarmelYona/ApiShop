import { storageService } from './async-stoarge.service'
const STORAGE_KEY = 'stores'

export const shopService = {
    query,
    getById,
    save,
    remove,
    getShop
}

async function query(filterBy) {
    try {
        const shop = await storageService.query(STORAGE_KEY)
        let stores = shop.Stores
        if (filterBy) {
            if (filterBy.name.length) {
                stores = stores.filter(store => store.StoreName === filterBy.name)
            }
            console.log(filterBy)
            if (filterBy.budget.length) {
                stores = stores.map(store => {
                    store.Products = store.Products.filter(product => product.Price <= +filterBy.budget)
                    return store
                })
            }
            if (filterBy.age.length) {
                stores = stores.map(store => {
                    store.Products = store.Products.filter(product => product.Age === filterBy.age)
                    return store
                })
            }
            if (filterBy.gender.length){
                stores = stores.map(store => {
                    store.Products = store.Products.filter(product => product.Gender === filterBy.gender)
                    return store
                })
            }
                return stores
        }
    } catch (err) {
        console.log(err)
    }
}

async function getShop() {
    return await storageService.query(STORAGE_KEY)
}

async function getById(productId) {
    // try {
    //     // const res = await axios.get(BASE_URL + toyId)
    //     // return res.data
    // } catch (err) {
    //     console.log(err)
    // }
}

async function remove(productId) {
    // try {
    //     // const res = await axios.delete(BASE_URL + toyId)
    //     // return res.data
    // } catch (err) {
    //     console.log(err.message)
    // }
}

async function save(product) {
    // try {
    //     if (product._id) {
    //         const res = await axios.put(BASE_URL + product._id, product)
    //         return res.data
    //     } else {
    //         const res = await axios.post(BASE_URL, product)
    //         return res.data
    //     }
    // } catch (err) {
    //     console.log(err)
    // }
}