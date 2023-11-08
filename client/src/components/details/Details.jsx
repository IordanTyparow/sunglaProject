import "./Details.css";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { AuthContext } from "../../../context/authContext"
import * as sunglassesService from "../../services/sunglassesService"

export default function Detaitls() {
    const [current, setCurrent] = useState({});
    const { user } = useContext(AuthContext);
    const { sunglassesId } = useParams();

    useEffect(() => {
        sunglassesService.getOne(sunglassesId)
            .then(data => setCurrent(data));
    }, []);

    return (
        <section className="details-page">
            <h1>Details page</h1>

            <div className="product">
                <img src={current.imageUrl} alt="photo" />
                <h3>Brand: {current.brand}</h3>
                <p className="price"><strong>Price:</strong > ${current.price}</p>
                <p>Description: {current.description}</p>
                <div className="buttons">
                    <Link to={`/sunglasses/${current._id}/edit`}>Edit</Link>
                    <Link to={`/sunglasses/${current._id}/delete`}>Delete</Link>
                    <Link to={`/sunglasses/${current._id}/buy`}>Buy</Link>
                </div>
            </div>
        </section >
    );
}