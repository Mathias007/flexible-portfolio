import { skinModels } from "../models";

import warmFavicon from "../../assets/favicon/warm/favicon.ico"
import coldFavicon from "../../assets/favicon/cold/favicon.ico";
import limeFavicon from "../../assets/favicon/lime/favicon.ico";

const styleOptions: skinModels.IStyleOption[] = [
    {
        id: 0,
        title: "color-1",
        color: "#fa5b0f",
        favicon: warmFavicon,
    },
    {
        id: 1,
        title: "color-2",
        color: "#1854b4",
        favicon: coldFavicon,
    },
    {
        id: 2,
        title: "color-3",
        color: "#37b182",
        favicon: limeFavicon,
    },
    {
        id: 3,
        title: "color-4",
        color: "#ec1839",
        favicon: warmFavicon,
    },
    {
        id: 4,
        title: "color-5",
        color: "#f021b2",
        favicon: limeFavicon,
    },
];

export default styleOptions;
