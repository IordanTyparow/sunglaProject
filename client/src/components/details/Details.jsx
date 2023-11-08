import "./Details.css";

import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"

import * as sunglassesService from "../../services/sunglassesService";
import { AuthContext } from "../../../context/authContext"

export default function Detaitls() {
    const [current, setCurrent] = useState({});
    const { user } = useContext(AuthContext);
    const { sunglassesId } = useParams();

    useEffect(() => {
        sunglassesService.getOneSunglasses(sunglassesId)
            .then((data) => setCurrent(data));
    }, []);

    const isOwner = user?._id == current._owner;

    return (
        <section className="details-page">
            <h1>Details page</h1>

            <div className="product">
                <img src={current.imageUrl} alt="photo" />
                <h3>Brand: {current.brand}</h3>
                <p className="price"><strong>Price:</strong > ${current.price}</p>
                <p>Description: {current.description}</p>
                <div className="buttons">
                    {user?._id ?
                        <>
                            {isOwner ?
                                <>
                                    <Link to={`/sunglasses/${current._id}/edit`}>Edit</Link>
                                    <Link to={`/sunglasses/${current._id}/delete`}>Delete</Link>
                                </>
                                : <Link to={`/sunglasses/${current._id}/buy`}>Buy</Link>
                            }
                        </>
                        : ''}
                </div>
            </div>
        </section >
    );
}