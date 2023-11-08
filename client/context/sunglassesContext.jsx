import { createContext, useEffect, useState } from "react";
import { getAll } from "../src/services/sunglassesService";

export const SunglassesContext = createContext();

export const SunglassesProvider = ({ children }) => {
    const [sunglasses, setSunglasses] = useState([]);

    const addSunglasses = (sunglassesData) => setSunglasses(state => [...state, sunglassesData]);

    useEffect(() => {
        getAll().then(data => {
            setSunglasses(data);
        })
    }, []);

    return (
        <SunglassesContext.Provider
            value={{ sunglasses, addSunglasses }}
        >
            {children}
        </SunglassesContext.Provider>
    );
};
