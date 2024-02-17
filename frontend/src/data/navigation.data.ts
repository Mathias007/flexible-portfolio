import { navigationModels } from "../models";
import { RoutesPaths } from "../config";

const navigationData: navigationModels.INavigationData[] = [
    { id: 0, label: "Home", link: RoutesPaths.HOME, icon: "home" },
    { id: 1, label: "About", link: RoutesPaths.ABOUT, icon: "person" },
    { id: 2, label: "Timeline", link: RoutesPaths.TIMELINE, icon: "timeline" },
    { id: 3, label: "Services", link: RoutesPaths.SERVICES, icon: "services" },
    { id: 4, label: "Portfolio", link: RoutesPaths.PORTFOLIO, icon: "work" },
    { id: 5, label: "Contact", link: RoutesPaths.CONTACT, icon: "chat" },
    // { id: 6, label: "Account", link: RoutesPaths.ACCOUNT, icon: "account" },
];

export default navigationData;
