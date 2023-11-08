import "./Edit.css";

import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as sunglassesService from "../../services/sunglassesService";
import { SunglassesContext } from "../../../context/sunglassesContext"

export default function Edit() {
    const [current, setCurrent] = useState({});
    const { sunglassesId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        sunglassesService.getOneSunglasses(sunglassesId).then((data) => {
            setCurrent(data);
        });
    }, []);

    const onSetValueHandler = (e) => {
        setCurrent((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onUpdateHandler = (e) => {
        e.preventDefault();

        const sunglassesData = {
            brand: current.brand,
            price: current.price,
            description: current.description,
            imageUrl: current.imageUrl,
        }

        sunglassesService.updateOne(sunglassesId, sunglassesData).then((data) => {
            navigate(`/sunglasses/${sunglassesId}/details`);
        });
    }

    return (
        <section className="edit-page">
            <h1>Edit page</h1>

            <form onSubmit={onUpdateHandler}>
                <label htmlFor="brand">Brand:</label>
                <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={current.brand || ""}
                    placeholder="Brand"
                    onChange={onSetValueHandler}
                />
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={current.price || ""}
                    placeholder="Price"
                    onChange={onSetValueHandler}

                />
                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    value={current.description || ""}
                    placeholder="Description"
                    onChange={onSetValueHandler}

                ></textarea>
                <label htmlFor="imageUrl">imageUrl:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={current.imageUrl || ""}
                    placeholder="imageUrl"
                    onChange={onSetValueHandler}
                />
                <input type="submit" value="Edit product" />
            </form>
        </section>
    );
}
