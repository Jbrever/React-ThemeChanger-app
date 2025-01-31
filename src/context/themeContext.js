import React , {createContext, useContext} from "react";

export const themeContext = createContext({
    themeMode:"light",
    dayMode:()=>{},
    nightMode:()=>{},
})

export const ThemeContextProvider = themeContext.Provider;

export default function useTheme(){
   return useContext(themeContext);
}




