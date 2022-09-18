import { ProductPreview } from "./product-preview";

export const BrandList = ({ brands }) => {

    return (
        <div className="brand-list">
            {brands &&
                brands.map((brand, index) => {
                    return <>{brand.Products.map((product, idx) => <ProductPreview product={product} brand={brand} key={idx} idx={idx} />)}</>
                })
            }
        </div>
    )
}

