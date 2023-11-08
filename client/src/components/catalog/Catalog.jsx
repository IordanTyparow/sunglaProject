import "./Catalog.css"

import { useContext } from "react"
import { SunglassesContext } from "../../../context/sunglassesContext"
import CatalogItem from "./CatalogItem";

export default function Catalog() {
    const { sunglasses } = useContext(SunglassesContext);

    return (
        <section className="catalog-page">
            <h1>Catalog page</h1>

            <div className="catalog-products">
                {sunglasses.length > 0
                    ? sunglasses.map(x => <CatalogItem key={x._id} item={x} />)
                    : <h2>No have sunglasses yet!</h2>
                }
            </div>
        </section>
    )
}