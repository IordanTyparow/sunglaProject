import "./Details.css";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

import { AuthContext } from "../../../context/authContext"
import * as sunglassesService from "../../services/sunglassesService"

export default function Detaitls() {
    const [current, setCurrent] = useState({});
    const [likes, setLikes] = useState(0);
    const [userLikes, setUserLikes] = useState(0);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { sunglassesId } = useParams();

    useEffect(() => {
        sunglassesService.getOne(sunglassesId)
            .then(data => setCurrent(data));

        sunglassesService.ownLikes(sunglassesId)
            .then(likesCount => setLikes(likesCount));

        sunglassesService.currentUserLikes(sunglassesId, user._id)
            .then(userLikesCount => setUserLikes(userLikesCount))

    }, [sunglassesId, user._id]);

    const onLikeHandler = async (sunglassesId) => {
        await sunglassesService.like(sunglassesId);

        setLikes(state => state + 1);
        setUserLikes(1);

        navigate(`/sunglasses/${sunglassesId}/details`);
    };

    const isOwner = current._ownerId === user._id;

    return (
        <section className="details-page">
            <h1>Details page</h1>

            <div className="product">
                <img src={current.imageUrl} alt="photo" />
                <h3>Brand: {current.brand}</h3>
                <p className="price"><strong>Price:</strong > ${current.price}</p>
                <p>Description: {current.description}</p>
                <div className="buttons">
                    {user.isAuthenticated ?
                        <>
                            {isOwner
                                ?
                                <>
                                    <Link to={`/sunglasses/${current._id}/edit`}>Edit</Link>
                                    <Link to={`/sunglasses/${current._id}/delete`}>Delete</Link>
                                </>
                                : userLikes == 0 ? <button onClick={() => onLikeHandler(current._id)}>Like</button> : <button>You allready like this post!</button>
                            }
                        </>
                        : ""}
                </div>
                <div className="like-btn">
                    <p>Likes: {likes}</p>
                </div>
            </div>
        </section >
    );
}