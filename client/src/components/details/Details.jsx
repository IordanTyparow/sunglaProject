import "./Details.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom"

import { AuthContext } from "../../../context/authContext"

export default function Detaitls() {
    const { user } = useContext(AuthContext);
    const { sunglassesId } = useParams();

    return (
        <section className="details-page">
            <h1>Details page</h1>

            <div className="product">
                <img src='/images/glass4.png' alt="photo" />
                <h3>Brand: $test</h3>
                <p className="price"><strong>Price:</strong > $100</p>
                <p>Description: some!</p>
                <div className="buttons">
                    <Link to={`/sunglasses/1/edit`}>Edit</Link>
                    <Link to={`/sunglasses/1/delete`}>Delete</Link>
                    <Link to={`/sunglasses/1/buy`}>Buy</Link>
                </div>
            </div>
        </section >
    );
}