import "./MyProfile.css";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

import * as sunglassesService from "../../services/sunglassesService";

export default function MyProfile() {
    const [sunglasses, setSunglasses] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        sunglassesService.getAll()
            .then(data => {
                const ownSunglasses = data.filter(x => x._ownerId === user._id);

                setSunglasses(ownSunglasses);
            });
    }, []);

    return (
        <section className="my-profile">
            <h1 className="header">My Profile</h1>
            <div className="card">
                <div className="img-container">
                    <img src={user.imageUrl || '/images/guest.png'} alt="John" />
                </div>
                <h1 className="title">{user.email}</h1>
            </div>
            <h2>Created suglassess</h2>
            <div className="liked-container">
                {sunglasses.map(x =>
                    <div key={x._id}>
                        <div className="product">
                            <p>Brand: {x.brand}</p>
                            <p>Price: ${x.price}</p>
                            <Link to={`/sunglasses/${x._id}/details`}>More info</Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}