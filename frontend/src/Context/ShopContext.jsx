import React, {createContext} from "react";
import {products} from "../Components/Assets/productData";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_product: products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
