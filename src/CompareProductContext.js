import React, { createContext, useContext, useState } from "react";

const CompareProductContext = createContext();

export const CompareProductProvider = ({ children }) => {
  const [compareProducts, setCompareProducts] = useState([]);

  const addToCompare = (product) => {
    setCompareProducts([...compareProducts, product]);
  };

  const removeFromCompare = (productId) => {
    const updatedCompareProducts = compareProducts.filter((product) => product.id !== productId);
    setCompareProducts(updatedCompareProducts);
  };

  return (
    <CompareProductContext.Provider value={{ compareProducts, addToCompare, removeFromCompare }}>
      {children}
    </CompareProductContext.Provider>
  );
};

export const useCompareProduct = () => {
  const context = useContext(CompareProductContext);
  if (!context) {
    throw new Error("useCompareProduct must be used within a CompareProductProvider");
  }
  return context;
};
