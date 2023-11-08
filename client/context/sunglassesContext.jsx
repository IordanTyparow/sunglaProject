import { createContext, useEffect, useState } from "react";
import * as sunglassesService from "../src/services/sunglassesService";

export const SunglassesContext = createContext();

export const SunglassesProvider = ({ children }) => {
    const [sunglasses, setSunglasses] = useState([]);

    const addSunglasses = (sunglassesData) => setSunglasses(state => [...state, sunglassesData]);

    const removeOne = (sunglassesData) => { setSunglasses((state) => state.filter((sunglasses) => sunglasses !== sunglassesData)); };

    return (
        <SunglassesContext.Provider
            value={{ sunglasses, setSunglasses, addSunglasses, removeOne }}
        >
            {children}
        </SunglassesContext.Provider>
    );
};
