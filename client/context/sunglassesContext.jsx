import { createContext, useState } from "react";

export const SunglassesContext = createContext();

export const SunglassesProvider = ({ children }) => {
    const [sunglasses, setSunglasses] = useState([]);

    const addSunglasses = (sunglassesData) => setSunglasses(state => [...state, sunglassesData]);

    return (
        <SunglassesContext.Provider
            value={{ sunglasses, addSunglasses }}
        >
            {children}
        </SunglassesContext.Provider>
    );
};
