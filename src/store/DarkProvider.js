import { useState } from "react";
import DarkContext from "./dark-context";

const DarkProvider = (props) => {
    const [dark, setDark] = useState(false);
    const toggleDark = () => {
        setDark(!dark);
        localStorage.setItem("dark", JSON.stringify(dark));
    };
    const darkContext = {
        dark: JSON.parse(localStorage.getItem('dark')),
        toggleDark: toggleDark,
    };
    return (
        <DarkContext.Provider value={darkContext}>
            {props.children}
        </DarkContext.Provider>
    );
};
export default DarkProvider;
