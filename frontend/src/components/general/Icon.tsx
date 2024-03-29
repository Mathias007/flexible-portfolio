import React from "react";

import SmileIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ComputerIcon from "@mui/icons-material/Computer";
import PaletteIcon from "@mui/icons-material/Palette";
import SearchIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ServicesIcon from "@mui/icons-material/ReceiptLong";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import AccountIcon from "@mui/icons-material/AccountBalance";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import GlobeIcon from "@mui/icons-material/Public";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GavelIcon from "@mui/icons-material/Gavel";
import WebHookIcon from "@mui/icons-material/Webhook";
import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";
import FrontendIcon from "@mui/icons-material/Vrpano";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import TerminalIcon from "@mui/icons-material/Terminal";
import SpeedIcon from "@mui/icons-material/Speed";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

interface IconProps {
    type: string;
    className?: string;
}

const IconsMap: { [key: string]: React.ElementType } = {
    smile: SmileIcon,
    smartphone: SmartphoneIcon,
    computer: ComputerIcon,
    palette: PaletteIcon,
    search: SearchIcon,
    "design-services": DesignServicesIcon,
    person: PersonIcon,
    home: HomeIcon,
    services: ServicesIcon,
    work: WorkIcon,
    chat: ChatIcon,
    account: AccountIcon,
    phone: PhoneIcon,
    location: LocationIcon,
    email: EmailIcon,
    gavel: GavelIcon,
    globe: GlobeIcon,
    moon: DarkModeIcon,
    sun: LightModeIcon,
    add: AddIcon,
    remove: RemoveIcon,
    calendar: CalendarIcon,
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    egildia: GlobeIcon,
    youtube: YouTubeIcon,
    linkedin: LinkedInIcon,
    github: GitHubIcon,
    "alter-email": AlternateEmailIcon,
    lock: LockIcon,
    perm: PermIdentityIcon,
    "receipt-long": ReceiptLongIcon,
    webhook: WebHookIcon,
    school: SchoolIcon,
    timeline: TimelineIcon,
    vrpano: FrontendIcon,
    "library-books": LibraryBooksIcon,
    speed: SpeedIcon,
    terminal: TerminalIcon,
    settings: SettingsIcon,
    storage: StorageIcon,
};

const Icon: React.FC<IconProps> = ({ type, className }) => {
    const IconComponent = IconsMap[type] || SmileIcon;

    return (
        <IconComponent
            className={className}
            data-icon={IconsMap[type] ? type : "default"}
            data-testid="icon"
        />
    );
};

export default Icon;
