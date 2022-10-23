import { useState } from "react";
import DarkContext from "./dark-context";

const DarkProvider = (props) => {
    let value;
    let initial = JSON.parse(localStorage.getItem('dark'))
    if (initial) {
        value = initial;
    } else {
        value = false
    }
    const [dark, setDark] = useState(value);
    const toggleDark = () => {
        setDark(!dark);
    };
    localStorage.setItem('dark', dark)
    const darkContext = {
        dark: JSON.parse(localStorage.getItem('dark')),
        toggleDark,
    };
    return (
        <DarkContext.Provider value={darkContext}>
            {props.children}
        </DarkContext.Provider>
    );
};
export default DarkProvider;
