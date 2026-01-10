import React, { createContext, useState } from "react";
export const dataContext = createContext();
import { food_items } from "../food";

const UserContext = ({ children }) => {
  let [cate, setCate] = useState(food_items);
  let [input, setInput] = useState("");
  let data = {
    input,
    setInput,
    cate,
    setCate
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
