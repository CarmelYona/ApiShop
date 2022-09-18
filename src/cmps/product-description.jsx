
export const ProductDescription = ({ product, brand }) => {

    return (
        <div className="product-description flex">
            <div>{brand.StoreName}</div>
            <div>{product.PriceLabel}</div>
            <div>{product.ProductTitle}</div>
        </div>
    )
}

