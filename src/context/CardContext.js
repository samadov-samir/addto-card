import { createContext } from "react";
import { useState } from "react";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
    const [data,setData]=useState([]);

  return <CardContext.Provider value={[data,setData]}>{children}</CardContext.Provider>;
}


export default CardContextProvider