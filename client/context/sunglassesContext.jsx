import { createContext, useState, useEffect } from "react";
import * as sunglassesService from "../src/services/sunglassesService"

export const SunglassesContext = createContext();

export const SunglassesProvider = ({ children }) => {
    const [sunglasses, setSunglasses] = useState([])

    useEffect(() => {
        sunglassesService.getAllSunglasses().then(data => setSunglasses(data));
    }, []);

    const addSunglasses = (sunglassesData) => {
        setSunglasses(state => [...state, sunglassesData]);
    }

    return (
        <SunglassesContext.Provider
            value={{ sunglasses, addSunglasses }}
        >
            {children}
        </SunglassesContext.Provider>
    );
};
