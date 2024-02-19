import { useState, FC } from "react";
import Icon from "./Icon";

import styleOptions from "../../config/data/skin.data";
import { skinModels } from "../../config/models";

interface IStyleSwitcherProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const StyleSwitcher: FC<IStyleSwitcherProps> = ({
    isDarkMode,
    toggleDarkMode,
}) => {
    const [isColorMenuOpen, setIsColorMenuOpen] = useState<boolean>(false);

    const handleColorMenuOpen = () => {
        setIsColorMenuOpen(!isColorMenuOpen);
    };

    const handleColorChange = (color: string) => {
        const root = document.documentElement;
        root.style.setProperty("--skin-color", color);
    };

    return (
        <div
            className={`style-switcher ${isColorMenuOpen ? "open" : ""}`}
            data-testid="style-switcher"
        >
            <div
                className="style-switcher-toggler s-icon"
                onClick={handleColorMenuOpen}
                data-testid="style-switcher-toggler"
            >
                {isColorMenuOpen ? (
                    <Icon type="remove" className="switcher-icon" />
                ) : (
                    <Icon type="add" className="switcher-icon" />
                )}
            </div>
            <div
                className="day-night s-icon"
                onClick={toggleDarkMode}
                data-testid="day-night"
            >
                {isDarkMode ? (
                    <Icon type="moon" className="switcher-icon" />
                ) : (
                    <Icon type="sun" className="switcher-icon" />
                )}
            </div>
            <h4>Theme Colors</h4>
            <div className="colors">
                {styleOptions.map((style: skinModels.IStyleOption) => (
                    <span
                        key={style.id}
                        className={style.title}
                        style={{ backgroundColor: style.color }}
                        onClick={() => handleColorChange(style.color)}
                        data-testid={style.title}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default StyleSwitcher;
