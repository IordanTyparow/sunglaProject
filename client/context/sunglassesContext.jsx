import { createContext, useState } from "react";

export const SunglassesContext = createContext();

export const SunglassesProvider = ({ children }) => {
    const [sunglasses, setSunglasses] = useState([]);

    const addSunglasses = (sunglassesData) => {
        setSunglasses(state => {
            const index = state.findIndex(sunglasses => sunglasses._id === sunglassesData._id);

            if (index !== -1) {
                state[index] = sunglassesData;
                return [...state];
            } else {
                return [...state, sunglassesData];
            }
        });
    }

    const removeOne = (sunglassesData) => { setSunglasses((state) => state.filter((sunglasses) => sunglasses !== sunglassesData)); };

    const getOne = (sunglassesId) => sunglasses.find(x => x._id === sunglassesId) || {};

    return (
        <SunglassesContext.Provider
            value={{ sunglasses, setSunglasses, addSunglasses, removeOne, getOne }}
        >
            {children}
        </SunglassesContext.Provider>
    );
};
