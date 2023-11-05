import { Link } from "react-router-dom";
import "./Details.css";

export default function Detaitls() {
    return (
        <section className="details-page">
            <h1>Details page</h1>

            <div className="product">
                <img src="/images/glass3.png" alt="photo" />
                <h3>Brand: product</h3>
                <p className="price"><strong>Price:</strong > $100</p>
                <p>Description: someThing!</p>
                <div className="buttons">
                    <Link to="/sunglasses/1/edit">Edit</Link>
                    <Link to="/sunglasses/1/delete">Delete</Link>
                </div>
            </div>
        </section >
    );
}