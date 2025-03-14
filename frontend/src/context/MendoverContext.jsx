import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const MendoverContext = createContext();

const MendoverContextProvider = ({ children }) => {
    const url = import.meta.env.VITE_API_URL || 'http://localhost:4000';

    const [nhaOData, setNhaOData] = useState([]);
    const [canHoData, setCanHoData] = useState([]);
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        getNhaOData();
        getCanHoData();
    }, []);

    useEffect(() => {
        const combined = [
            ...nhaOData.map((item) => ({ ...item, type: 'NhaO' })),
            ...canHoData.map((item) => ({ ...item, type: 'CanHo' })),
        ];
        setCombinedData(shuffleArray(combined));
    }, [nhaOData, canHoData]);

    const getNhaOData = async () => {
        try {
            const response = await axios.get(`${url}/api/v1/client/NhaO`);
            setNhaOData(response.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const getCanHoData = async () => {
        try {
            const response = await axios.get(`${url}/api/v1/client/CanHo`);
            setCanHoData(response.data.products);
            console.log(response.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const contextValue = {
        nhaOData,
        canHoData,
        combinedData,
    };

    return <MendoverContext.Provider value={contextValue}>{children}</MendoverContext.Provider>;
};

export default MendoverContextProvider;
