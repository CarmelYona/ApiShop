import { useDispatch, useSelector } from "react-redux"
import { setFilter } from '../store/shop/shop.action'

export const Filter = ({ name, filter }) => {

    let { filterBy } = useSelector((storeState) => storeState.shopModule)

    const dispatch = useDispatch()

    const onSelect = ({ target }) => {
        const newFilter = { ...filterBy }
        const field = target.name
        const val = target.value
        newFilter[field] = val
        dispatch(setFilter(newFilter))
    }
    return (
        <form className="filter">
            <select placeholder={name} name={name.toLowerCase()} onChange={onSelect} >
                <option value="">{name}</option>
                {filter?.map((type, idx) => {
                    return <option key={idx} value={type.Value}>{type.DisplayText}</option>
                })
                }
            </select>
        </form >
    )
}

