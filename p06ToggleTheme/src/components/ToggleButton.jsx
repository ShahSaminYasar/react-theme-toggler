import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ToggleButton() {
    const { setLightMode, setDarkMode } = useContext(ThemeContext);

    return (
        <label className="w-[72px] h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-transparent dark:border-slate-700 relative shadow-inner">
            <input type="checkbox" className="sr-only peer" onChange={(e) => {
                if(e.currentTarget.checked) {
                    setDarkMode()
                } else {
                    setLightMode()
                }
            }} />
            <div className="w-8 h-8 rounded-full bg-white shadow-md absolute left-0 peer-checked:bg-indigo-600 peer-checked:left-8 duration-300"></div>
        </label>
    )
}

export default ToggleButton;