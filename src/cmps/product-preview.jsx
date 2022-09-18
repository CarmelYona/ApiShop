import { ProductDescription } from "./product-description"

export const ProductPreview = ({ product, brand, idx }) => {

    return (
        <section className="product-preview flex">
            <div className="img-wrapper flex " >
                <img src={product.ProductImage} alt="" />
            </div>
            <ProductDescription product={product} brand={brand} />
        </section>
    )
}