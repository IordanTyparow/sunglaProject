import "./Catalog.css"
import { Link } from "react-router-dom"

export default function Catalog() {
    return (
        <section className="catalog-page">
            <h1>Catalog page</h1>

            <div className="catalog-products">
                <div className="product">
                    <img src="/images/glass3.png" />
                    <h3>Brand: product</h3>
                    <span>Price: $100</span>
                    <Link to="/sunglasses/1/details">More info</Link>
                </div>
                <div className="product">
                    <img src="/images/glass4.png" />
                    <h3>Brand: product</h3>
                    <span>Price: $100</span>
                    <Link to="">More info</Link>
                </div>
            </div>
        </section>
    )
}